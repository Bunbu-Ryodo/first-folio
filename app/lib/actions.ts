"use server"

const { PrismaClient, Prisma } = require('@prisma/client')
const { z } = require('zod')
const { redirect } = require('next/navigation');
const { revalidatePath } = require('next/cache');
const bcrypt = require('bcrypt');

const prisma = new PrismaClient()

export type State = {
  errors?: {
    email?: string[];
    password?: string[];
    confirmPassword?: string[];
  };
  message?: string | null;
  loading?: boolean
};

const CreateUser = z.object({
  email: z.string(),
  password: z.string().min(8),
  confirmPassword: z.string().min(8)
  })
  .refine((data: any) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"]
  });

  //Could try using .nonempty() in future as per vercel official tutorial

export async function createUser(prevState: State, formData: FormData){
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
        //If something suddenly breaks look here
        redirect('/introduce');
      }

      const LoginUser = z.object({
        email: z.string(),
        password: z.string()
      })


      export async function loginUser(prevState: State, formData: FormData){
        const validatedFields = LoginUser.safeParse({
          email: formData.get('email'),
          password: formData.get('password')
        })
        
        if(!validatedFields.success){
          return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Please enter your login email and password'
          }
        }

        const { email, password } = validatedFields.data;

        try {
          const user = await prisma.user.findUnique({
            where: {
              email: email
            }
          })
          //If weird errors, try moving this outside try
          if(user){
            const hashedPassword = user.password
            bcrypt.hash(password, hashedPassword).then(function(hash: boolean){
              if(hash == false){
                return { errors: { password: ['Password is incorrect']}, message: 'Invalid password, please try again'}
              } else {
                return { errors: {}, message: 'Log in successful'}
              }
            })
          } else {
            return { errors: { email: ['No user with that email exists']}, message: 'Invalid login, please try again'}
          }
        } catch(e: any){
          if(e){
            return { errors: {}, message: 'Unable to login please try again' }
          }
        }

        revalidatePath('/login');
        redirect('/introduce');
      }
      