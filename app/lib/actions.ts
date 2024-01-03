"use server"

const { PrismaClient, Prisma } = require('@prisma/client')
const { z } = require('zod')
const { redirect } = require('next/navigation');
const { revalidatePath } = require('next/cache');
const bcrypt = require('bcrypt');

const prisma = new PrismaClient()

type RegisterState = {
  errors?: {
    email?: string[];
    password?: string[];
    confirmPassword?: string[];
  };
  message?: string | null;
  loading?: boolean
};

type ChangeEmailState = {
  errors?: {
    email?: string[];
    confirmEmail?: string[];
  }
  message?: string | null;
}

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
    const updateUser = await prisma.user.update({
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
      