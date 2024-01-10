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
    newEmail: z.string().email(),
    confirmEmail: z.string().email()
  })
    .refine((data: any) => data.newEmail === data.confirmEmail, {
      message: "Emails do not match",
      path: ["confirmEmail"]
  });

  const ChangePassword = z.object({
    currentPassword: z.string().min(8),
    newPassword: z.string().min(8),
    confirmPassword: z.string().min(8)
  })
    .refine((data: any) => data.newPassword === data.confirmPassword, {
      message: "Passwords don't match",
      path: ["confirmPassword"]
  });


  const SaveIntro = z.object({
    name: z.string(),
    job_title: z.string(),
    bio: z.string()
  })

  const Tech = z.object({
    experience: z.string(),
    technologies: z.array(z.string())
  })

  const Project = z.object({
    id: z.number().nullable(),
    title: z.string(),
    repo: z.string(),
    url: z.string(),
    description: z.string(),
    // images: z.array(z.string())
  })

  const DeleteProject = z.object({
    id: z.number()
  })

  //Images may fail to validate, if so investigate docs

  async function getUserId(){
    const session = await getServerSession();
    const userEmail = session?.user?.email;

    const user = await prisma.User.findUnique({
      where: {
        email: userEmail 
      }
    })

    return user.id;
  }

  export async function getTech(){
    const userId = await getUserId();
    const tech = await prisma.Tech.findUnique({
      where: {
        developerId: userId
      }
    })
    return tech;
  }

  export async function addNewProject(){
    const userId = await getUserId();
    
    const project = await prisma.Project.create({
        data: {
          creatorId: userId
        }
      })

    revalidatePath('/projects')
    return { errors: {}, message: null}
  }

  export async function deleteProject(prevState: GenericState, formData: FormData){
    const userId = await getUserId();

    console.log("Before validating the fields");

    const validatedFields = DeleteProject.safeParse({
      id: Number(formData.get('id'))
    })

    if(!validatedFields.success){
      return {
        errors: validatedFields.error.flatten().fieldErrors,
        message: 'Stop trying to break the form you\'re not clever'
      }
    }

    console.log("Successfully validated the fields");

    const { id } = validatedFields.data;

    try {

      console.log("Attempting delete");
      if(id){
        await prisma.Project.delete({
          where: {
            id: id,
            creatorId: userId
          }
        })
      } else {
        console.log("No id found");
        return { errors: {}, message: "Stop trying to break the form you're not clever"}
      }
    } catch(e) {
      console.log(e)
      return { errors: {}, message: "Someting went wrong"}
    }
    revalidatePath('/projects')
    return { errors: {}, message: null }
  }

  export async function saveProject(prevState: GenericState, formData: FormData){
    const userId = await getUserId();

    const validatedFields = Project.safeParse({
      id: Number(formData.get('id')),
      title: formData.get('title'),
      repo: formData.get('repo'),
      description: formData.get('description'),
      url: formData.get('url'),
      images: formData.getAll('images')
    })

    if(!validatedFields.success){
      return {
        errors: validatedFields.error.flatten().fieldErrors,
        message: 'Stop trying to break the form you\'re not clever'
      }
    }
    
    const { id, title, repo, description, url, images } = validatedFields.data;

    try {
      if(id){
        const project = await prisma.Project.findMany({
          where: {
            creatorId: userId
          }
        })

        if(project){
          await prisma.Project.update({
            where: {
              id: id, 
              creatorId: userId
            },
            data: {
              title: title, 
              repo: repo,
              url: url,
              description: description,
              images: images
            }
          })
        }
      } else {
        await prisma.Project.create({
          data: {
            title: title,
            repo: repo,
            url: url,
            description: description,
            creatorId: userId,
            images: images
          }
          // images: images
        })
      }
    } catch(e: any) {
      console.log(e)
      return { errors: {}, message: "Something went wrong, please try again" }
    }
    revalidatePath('/projects')
    return { errors: {}, message: null }
  }

  export async function getProjects(){
    const userId = await getUserId();
    const projects = await prisma.Project.findMany({
      where: {
        creatorId: userId
      }
    });

    return projects;
  }
  
  export async function saveTech(prevState: GenericState, formData: FormData){
    const userId = await getUserId();

    const validatedFields = Tech.safeParse({
      experience: formData.get('experience'),
      technologies: [...formData.getAll('technologies')].map(String)
    })

    if(!validatedFields.success){
      return {
        errors: validatedFields.error.flatten().fieldErrors,
        message: 'Stop trying to break the form, you\'re not clever'
      }
    }

    const { experience, technologies } = validatedFields.data;

    try {
      const tech = await prisma.Tech.findUnique({
        where: {
          developerId: userId
        }
      })

      if(tech){
        await prisma.Tech.update({
          where: {
            developerId: userId
          }, 
          data: {
            experience: experience,
            technologies: technologies
          }
        })
      } else {
        await prisma.Tech.create({
          data: {
            experience: experience,
            technologies: technologies,
            developerId: userId
          }
        })
      }
    } catch(e){
      console.log(e);
      return {errors: {fail: ["Something went wrong"]}, message: "Something went wrong, please try again"}
    }

    revalidatePath('/tech');
    redirect('/projects');
    return { errors: {}, message: null }
  }

  export async function getIntroduction(){
    const userId = await getUserId();
    
    const introduce = await prisma.Introduce.findUnique({
      where: {
        personId: userId
      }
    })

    return introduce;
  }

  export async function saveIntroduction(prevState: GenericState, formData: FormData){
    const userId = await getUserId();

    const validatedFields = SaveIntro.safeParse({
      name: formData.get('name'),
      job_title: formData.get('job_title'),
      bio: formData.get('bio')
    })

    if (!validatedFields.success) {
      return {
        errors: validatedFields.error.flatten().fieldErrors,
        message: 'Submit anything you like so long as its a string'
      };
    }

    const { name, job_title, bio } = validatedFields.data;

    try {
      const introduce = await prisma.Introduce.findUnique({
        where: {
          personId: userId
        }
      });

      if(introduce){
        await prisma.Introduce.update({
          where: {
            personId: userId
          }, 
          data: {
            name: name,
            job_title: job_title,
            bio: bio
          }
        })
      } else {
        await prisma.Introduce.create({
          data: {
            name: name,
            job_title: job_title,
            bio: bio,
            personId: userId       
          }
        })
      }
    } catch(e) {
      console.log(e);
      return {errors: {fail: ["Something went wrong"]}, message: "Something went wrong, please try again"}
    }

    revalidatePath('/introduce');
    redirect('/tech');
    return {errors: {}, message: null}
  }


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
    newEmail: formData.get('newEmail'),
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

      // const LoginUser = z.object({
      //   email: z.string().email(),
      //   password: z.string().min(8)
      // })
      