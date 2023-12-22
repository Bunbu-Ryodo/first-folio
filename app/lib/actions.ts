"use server"

const { PrismaClient, Prisma } = require('@prisma/client')
const { z } = require('zod')
const { redirect } = require ('next/navigation');

const prisma = new PrismaClient()

export type State = {
  errors?: {
    email?: string[];
    password?: string[];
    confirmPassword?: string[];
  };
  message?: string | null;
};

const CreateUser = z.object({
  email: z.string(),
  password: z.string().min(8),
  confirmPassword: z.string().min(8)
  })
  .refine((data: any) => data.password === data.confirmPassword, {
    message: "The passwords you have entered do not match.",
    path: ["confirmPassword"]
  });

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
    
        try {
          await prisma.User.create({
            data: {
              email: email,
              password: password
            }
          })
        } catch(e: any) {
          if (e instanceof Prisma.PrismaClientKnownRequestError) {
            if (e.code === 'P2002') {
              if(!formData.get('email'))
              { 
                return { errors: { email: ['You must use an email to sign up'] }, message: 'Fields missing, please try again.'}

              }
                return { errors: { email: ['A new user cannot be created with this email'] }, message: ''}
            }
          }
        }
        redirect('/introduce');
      }
      