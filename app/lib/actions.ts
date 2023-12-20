"use server"

const { PrismaClient } = require('@prisma/client')
const { z } = require('zod')
const { revalidatePath } = require('next/cache')
const { redirect } = require ('next/navigation');


const prisma = new PrismaClient()

const FormSchema = z.object({
  id: z.string(),
  email: z.string(),
  password: z.string().min(12),
})

const CreateUser = FormSchema.omit({id: true});


export type State = {
  errors?: {
    email?: string[];
    password?: string[];
    confirmPassword?: string[];
  };
  message?: string | null;
};

export async function createUser(prevState: State, formData: FormData){
    const validatedFields = CreateUser.safeParse({
          email: formData.get('email'),
          password: formData.get('password')
        })
    
        if(!validatedFields.success){
          return { message: 'Failed to create user' }
        }
    
        const { email, password } = validatedFields.data
    
        console.log(email, "Email");
        console.log(password, "Password");
    
        try {
          await prisma.User.create({
            data: {
              email: email,
              password: password
            }
     
          })
          revalidatePath('/');
          return { message: 'Registered user'}
        } catch(e) {
          return { message: 'Failed to create user' }
        }
}

// export async function createUser(prevState: any, formData: FormData){
//     console.log("Do we even get here?");


//     const validatedFields = CreateUser.safeParse({
//       email: formData.get('email'),
//       password: formData.get('password')
//     })

//     if(!validatedFields.success){
//       return { message: 'Failed to create user' }
//     }

//     const { email, password } = validatedFields.data

//     console.log(email, "Email");
//     console.log(password, "Password");

//     try {
//       await prisma.User.create({
//         email:  'faggot@aol.com',
//         password: '1235'
//       })

//       revalidatePath('/');
//       return { message: 'Registered user'}
//     } catch(e) {
//       return { message: 'Failed to create user' }
//     }
// }



// main()
  // .then(async () => {
  //   await prisma.$disconnect()
  // })
  // .catch(async (e) => {
  //   console.error(e)
  //   await prisma.$disconnect()
  //   process.exit(1)
  // })