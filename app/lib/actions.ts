"use server"

const { PrismaClient, Prisma } = require('@prisma/client')
const { z } = require('zod')
const { redirect } = require('next/navigation');
const { revalidatePath } = require('next/cache');
const bcrypt = require('bcrypt');
const { Registerstate, ChangeEmailState, ChangePasswordState } = require('@/app/lib/action-types');
import { getServerSession } from 'next-auth';


const prisma = new PrismaClient()

const CreateUser = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  confirmPassword: z.string().min(8)
  })
  .refine((data: any) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"]
  });

  //Could try using .nonempty() in future as per vercel official tutorial

  const ChangeEmail = z.object({
    currentEmail: z.string().email(),
    email: z.string().email(),
    confirmEmail: z.string().email()
    .refine((data: any) => data.email === data.confirmEmail, {
      message: "Emails do not match",
      path: ["confirmEmail"]
    })
  });

  const ChangePassword = z.object({
    currentPassword: z.string().min(8),
    newPassword: z.string().min(8),
    confirmPassword: z.string().min(8)
    .refine((data: any) => data.newPassword === data.confirmPassword, {
      message: "Passwords don't match",
      path: ["confirmPassword"]
    })
  });

  export async function getUser(email: string){
    const user = await prisma.User.findUnique({
      where: {
        email: email
      }
    })
  return user;
}

export async function changeEmail(prevState: ChangeEmailState, formData: FormData){

  const validatedFields = ChangeEmail.safeParse({
    currentEmail: formData.get('currentEmail'),
    email: formData.get('email'),
    confirmEmail: formData.get('confirmEmail')
  })

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Fields missing, please try again.',
    };
  }

  const { currentEmail, email, confirmEmail } = validatedFields.data;

  try {
    await prisma.User.update({
      where: {
        email: currentEmail
      }, 
      data: {
        email: confirmEmail
      }
    })
  } catch (e: any){
    return { errors: {}, message: 'Something went wrong, please try again.' }
  }
  return { errors: {}, message: `Email changed to ${confirmEmail}` }
}

export async function changePassword(prevState: ChangePasswordState, formData: FormData){
    const session = await getServerSession();
    const userEmail = session?.user?.email;

    const validatedFields = ChangePassword.safeParse({
      currentPassword: formData.get('currentPassword'),
      newPassword: formData.get('newPassword'),
      confirmPassword: formData.get('confirmPassword')
    })

    if(!validatedFields.success){
      return {
        errors: validatedFields.error.flatten().fieldErrors,
        message: 'Fields missing, please try again.',
      };
    }

    const { currentPassword, confirmPassword } = validatedFields.data;

    try {
      const user = await prisma.User.findUnique({
        where: {
          email: userEmail
        }
      })

      if(user){
        const hashedPassword = user.password;
        bcrypt.compare(currentPassword, hashedPassword).then(function(hash: boolean){
          if(hash == false){
            return { errors: { currentPassword: ['Password is incorrect']}, message: ''}
          }
        })

        await prisma.User.update({
          where: {
            email: userEmail
          }, 
          data: {
            password: confirmPassword
          }
        })
      } else {
        return { errors: {}, message: 'Something went wrong, please try again later'}
      }
    } catch(e: any){
      return { errors: {}, message: 'Something went wrong, please try again later'}
    } 
    return { errors: {}, message: "Password successfully changed" }
}

export async function createUser(prevState: RegisterState, formData: FormData){
    const validatedFields = CreateUser.safeParse({
          email: formData.get('email'),
          password: formData.get('password'),
          confirmPassword: formData.get('confirmPassword')
        })
    
        if (!validatedFields.success) {
          return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Fields missing, please try again.',
          };
        }
    
        const { email, password } = validatedFields.data
    
        const hashedPassword = await bcrypt.hash(password, 10);

        try {
          await prisma.User.create({
            data: {
              email: email,
              password: hashedPassword
            }
          })
        } catch(e: any) {
          if (e instanceof Prisma.PrismaClientKnownRequestError) {
            if (e.code === 'P2002') {
              if(!formData.get('email'))
              { 
                return { errors: { email: ['You must use an email to sign up'] }, message: 'Fields missing, please try again.' }

              }
                return { errors: { email: ['A new user cannot be created with this email'] }, message: '' }
            }
          }
        }
        revalidatePath('/register');
        redirect('/login');
        return { errors: {}, message: null }
      }

      const LoginUser = z.object({
        email: z.string().email(),
        password: z.string().min(8)
      })
      