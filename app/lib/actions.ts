"use server";

const { PrismaClient, Prisma } = require("@prisma/client");
const { z } = require("zod");
const { redirect } = require("next/navigation");
const { revalidatePath } = require("next/cache");
const bcrypt = require("bcrypt");
import { getServerSession } from "next-auth";

const prisma = new PrismaClient();

const CreateUser = z
  .object({
    email: z.string().email(),
    password: z.string().min(8),
    confirmPassword: z.string().min(8),
  })
  .refine((data: any) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

const ChangeEmail = z
  .object({
    currentEmail: z.string().email(),
    newEmail: z.string().email(),
    confirmEmail: z.string().email(),
  })
  .refine((data: any) => data.newEmail === data.confirmEmail, {
    message: "Emails do not match",
    path: ["confirmEmail"],
  });

const ChangePassword = z
  .object({
    currentPassword: z.string().min(8),
    newPassword: z.string().min(8),
    confirmPassword: z.string().min(8),
  })
  .refine((data: any) => data.newPassword === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

const SaveIntro = z.object({
  name: z.string(),
  job_title: z.string(),
  bio: z.string(),
});

const Tech = z.object({
  experience: z.string(),
  technologies: z.array(z.string()),
});

const Project = z.object({
  id: z.number().nullable(),
  title: z.string(),
  repo: z.string(),
  url: z.string(),
  description: z.string(),
});

const DeleteProject = z.object({
  id: z.number(),
});

const Socials = z.object({
  contact_email: z.string(),
  x: z.string(),
  instagram: z.string(),
  facebook: z.string(),
  linked_in: z.string(),
});

const Endorsements = z.object({
  id: z.number().nullable(),
  name: z.string(),
  comments: z.string(),
});

export async function getUserId() {
  const session = await getServerSession();
  const userEmail = session?.user?.email;

  const user = await prisma.User.findUnique({
    where: {
      email: userEmail,
    },
  });

  return user.id;
}

export async function saveEndorsements(
  prevState: GenericState,
  formData: FormData
) {
  const userId = await getUserId();

  const validatedFields = Endorsements.safeParse({
    id: Number(formData.get("id")),
    name: formData.get("name"),
    comments: formData.get("comments"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.errors.flatten().fieldErrors,
      message: "Stop trying to break the form you're not clever",
    };
  }

  const { name, comments, id } = validatedFields.data;

  try {
    if (id) {
      const endorsement = await prisma.Endorsement.findUnique({
        where: {
          candidateId: userId,
          id: id,
        },
      });

      if (endorsement) {
        await prisma.Endorsement.update({
          where: {
            id: id,
            candidateId: userId,
          },
          data: {
            name: name,
            comments: comments,
          },
        });
      }
    } else {
      await prisma.Endorsement.create({
        data: {
          name: name,
          comments: comments,
          candidateId: userId,
        },
      });
    }
  } catch (e) {
    console.log(e);
    return {
      errors: { fail: ["Endorsement did not save"] },
      message: "Something went wrong please try again",
    };
  }
  revalidatePath("/endorsements");
  return { errors: {}, message: "" };
}

export async function getPortfolioData() {
  const userId = await getUserId();
  const introduction = await getIntroduction(userId);
  const tech = await getTech(userId);
  const projects = await getProjects(userId);
  const endorsements = await getEndorsements(userId);
  const socials = await getSocials(userId);

  const noImages = projects.map((project: any) => {
    return {
      title: project.title,
      repo: project.repo,
      url: project.url,
      description: project.description,
    };
  });

  const portfolioData = {
    introduction: introduction,
    tech: tech,
    projects: noImages,
    endorsements: endorsements,
    socials: socials,
  };

  return portfolioData;
}

export async function getCV() {
  const userId = await getUserId();
  const cv = await prisma.CV.findUnique({
    where: {
      jobSeekerId: userId,
    },
  });

  if (cv) return cv.cv;
  else return "";
}

export async function getEndorsements(id?: string) {
  if (id) {
    const endorsements = await prisma.Endorsement.findMany({
      where: {
        candidateId: id,
      },
    });

    if (endorsements) return endorsements;
  } else {
    const userId = await getUserId();

    const endorsements = await prisma.Endorsement.findMany({
      where: {
        candidateId: userId,
      },
    });

    if (endorsements) return endorsements;
  }
}

export async function uploadCV(prevState: GenericState, formData: FormData) {
  const userId = await getUserId();

  const cvPromise = Array.from(formData.entries())
    .filter(([name]) => name === "cv")
    .map(async ([, value]) => {
      if (value instanceof File) {
        const bytes = await value.arrayBuffer();
        const buffer = Buffer.from(bytes);
        const bytesFormat = Buffer.from(buffer).toString("base64");
        return bytesFormat;
      }
    });

  const cv = await Promise.all(cvPromise);

  if (!cv[0])
    return {
      errors: { fail: "Upload Failed" },
      message: "No CV Selected. Please try again.",
    };

  const existingCV = await prisma.CV.findMany({
    where: {
      jobSeekerId: userId,
    },
  });

  try {
    if (existingCV.length) {
      await prisma.CV.update({
        where: {
          jobSeekerId: userId,
        },
        data: {
          cv: cv[0],
        },
      });
    } else {
      await prisma.CV.create({
        data: {
          cv: cv[0],
          jobSeekerId: userId,
        },
      });
    }
  } catch (e) {
    console.log(e);
    return { errors: {}, message: "" };
  }
  revalidatePath("/cv");
  redirect("/howtouse");
  return { errors: {}, message: "" };
}
export async function saveSocials(prevState: GenericState, formData: FormData) {
  const userId = await getUserId();

  const validatedFields = Socials.safeParse({
    contact_email: formData.get("contact_email"),
    x: formData.get("x"),
    instagram: formData.get("instagram"),
    facebook: formData.get("facebook"),
    linked_in: formData.get("linked_in"),
    website: formData.get("website"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Stop trying tobreak the form you're not clever",
    };
  }

  const { contact_email, x, instagram, facebook, linked_in, website } =
    validatedFields.data;

  try {
    const socials = await prisma.Socials.findMany({
      where: {
        contactId: userId,
      },
    });

    if (socials.length) {
      await prisma.Socials.update({
        where: {
          contactId: userId,
        },
        data: {
          contact_email: contact_email,
          x: x,
          instagram: instagram,
          facebook: facebook,
          linked_in: linked_in,
          website: website,
        },
      });
    } else {
      await prisma.Socials.create({
        data: {
          contact_email: contact_email,
          x: x,
          instagram: instagram,
          facebook: facebook,
          linked_in: linked_in,
          website: website,
          contactId: userId,
        },
      });
    }
  } catch (e: any) {
    console.log(e);
    return { errors: {}, message: "Something went wrong, please try again" };
  }
  revalidatePath("/socials");
  redirect("/cv");
  return { errors: {}, message: null };
}

export async function getSocials(id?: string) {
  if (id) {
    const socials = await prisma.Socials.findUnique({
      where: {
        contactId: id,
      },
    });

    if (socials) return socials;
    else
      return {
        contact_email: "",
        x: "",
        instagram: "",
        facebook: "",
        linked_in: "",
        website: "",
      };
  } else {
    const userId = await getUserId();
    const socials = await prisma.Socials.findUnique({
      where: {
        contactId: userId,
      },
    });

    if (socials.length) return socials;
    else
      return {
        contact_email: "",
        x: "",
        instagram: "",
        facebook: "",
        linked_in: "",
        website: "",
      };
  }
}

export async function getTech(id?: string) {
  if (id) {
    const tech = await prisma.Tech.findUnique({
      where: {
        developerId: id,
      },
    });

    if (tech) return tech;
    else return { technologies: [], experience: "" };
  } else {
    const userId = await getUserId();
    const tech = await prisma.Tech.findUnique({
      where: {
        developerId: userId,
      },
    });

    if (tech) return tech;
    else return { technologies: [], experience: "" };
  }
}

export async function addNewProject() {
  const userId = await getUserId();

  const project = await prisma.Project.create({
    data: {
      creatorId: userId,
    },
  });

  revalidatePath("/projects");
  return { errors: {}, message: null };
}

export async function deleteProject(
  prevState: GenericState,
  formData: FormData
) {
  const userId = await getUserId();

  const validatedFields = DeleteProject.safeParse({
    id: Number(formData.get("id")),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Stop trying to break the form you're not clever",
    };
  }

  const { id } = validatedFields.data;

  try {
    if (id) {
      await prisma.Project.delete({
        where: {
          id: id,
          creatorId: userId,
        },
      });
    } else {
      return {
        errors: {},
        message: "Stop trying to break the form you're not clever",
      };
    }
  } catch (e) {
    console.log(e);
    return { errors: {}, message: "Someting went wrong" };
  }
  revalidatePath("/projects");
  return { errors: {}, message: null };
}

export async function saveProject(prevState: GenericState, formData: FormData) {
  const userId = await getUserId();

  const validatedFields = Project.safeParse({
    id: Number(formData.get("id")),
    title: formData.get("title"),
    repo: formData.get("repo"),
    description: formData.get("description"),
    url: formData.get("url"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Stop trying to break the form you're not clever",
    };
  }

  async function turnToBytes(image: File) {
    const bytes = await image.arrayBuffer();
    const buffer = Buffer.from(bytes);
    return buffer;
  }

  let images: any = [];

  if (formData.getAll("images")) {
    const imagePromises = Array.from(formData.entries())
      .filter(([name]) => name === "images")
      .map(async ([, value]) => {
        if (value instanceof File) {
          const bytes = await value.arrayBuffer();
          const buffer = Buffer.from(bytes);
          const bytesFormat = Buffer.from(buffer).toString("base64");
          return bytesFormat;
        }
      });

    images = await Promise.all(imagePromises);
  }

  const { id, title, repo, description, url } = validatedFields.data;

  try {
    if (id) {
      const project = await prisma.Project.findMany({
        where: {
          creatorId: userId,
        },
      });

      if (project) {
        await prisma.Project.update({
          where: {
            id: id,
            creatorId: userId,
          },
          data: {
            title: title,
            repo: repo,
            url: url,
            description: description,
            images: images ? images : [],
          },
        });
      }
    } else {
      await prisma.Project.create({
        data: {
          title: title,
          repo: repo,
          url: url,
          description: description,
          creatorId: userId,
          images: images ? images : [],
        },
      });
    }
  } catch (e: any) {
    console.log(e);
    return { errors: {}, message: "Something went wrong, please try again" };
  }
  revalidatePath("/projects");
  return { errors: {}, message: "Project details and images saved" };
}

export async function getProjectImages(id: number) {
  const project = await prisma.Project.findUnique({
    where: {
      id: id,
    },
  });

  return project.images;
}
export async function getProjects(id?: string) {
  if (id) {
    const projects = await prisma.Project.findMany({
      where: {
        creatorId: id,
      },
    });

    return projects;
  } else {
    const userId = await getUserId();
    const projects = await prisma.Project.findMany({
      where: {
        creatorId: userId,
      },
    });

    return projects;
  }
}

export async function saveTech(prevState: GenericState, formData: FormData) {
  const userId = await getUserId();

  const validatedFields = Tech.safeParse({
    experience: formData.get("experience"),
    technologies: [...formData.getAll("technologies")].map(String),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Stop trying to break the form, you're not clever",
    };
  }

  const { experience, technologies } = validatedFields.data;

  try {
    const tech = await prisma.Tech.findUnique({
      where: {
        developerId: userId,
      },
    });

    if (tech) {
      await prisma.Tech.update({
        where: {
          developerId: userId,
        },
        data: {
          experience: experience,
          technologies: technologies,
        },
      });
    } else {
      await prisma.Tech.create({
        data: {
          experience: experience,
          technologies: technologies,
          developerId: userId,
        },
      });
    }
  } catch (e) {
    console.log(e);
    return {
      errors: { fail: ["Something went wrong"] },
      message: "Something went wrong, please try again",
    };
  }

  revalidatePath("/tech");
  redirect("/projects");
  return { errors: {}, message: null };
}

export async function getIntroduction(id?: string) {
  if (id) {
    const introduction = await prisma.Introduce.findUnique({
      where: {
        personId: id,
      },
    });

    if (introduction) return introduction;
    else return { name: "", job_title: "", bio: "" };
  } else {
    const userId = await getUserId();
    const introduction = await prisma.Introduce.findUnique({
      where: {
        personId: userId,
      },
    });
    if (introduction) return introduction;
    else return { name: "", job_title: "", bio: "" };
  }
}

export async function saveIntroduction(
  prevState: GenericState,
  formData: FormData
) {
  const userId = await getUserId();

  const validatedFields = SaveIntro.safeParse({
    name: formData.get("name"),
    job_title: formData.get("job_title"),
    bio: formData.get("bio"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Submit anything you like so long as its a string",
    };
  }

  const { name, job_title, bio } = validatedFields.data;

  try {
    const introduce = await prisma.Introduce.findUnique({
      where: {
        personId: userId,
      },
    });

    if (introduce) {
      await prisma.Introduce.update({
        where: {
          personId: userId,
        },
        data: {
          name: name,
          job_title: job_title,
          bio: bio,
        },
      });
    } else {
      await prisma.Introduce.create({
        data: {
          name: name,
          job_title: job_title,
          bio: bio,
          personId: userId,
        },
      });
    }
  } catch (e) {
    console.log(e);
    return {
      errors: { fail: ["Something went wrong"] },
      message: "Something went wrong, please try again",
    };
  }

  revalidatePath("/introduce");
  redirect("/tech");
  return { errors: {}, message: null };
}

export async function getUser(email: string) {
  const user = await prisma.User.findUnique({
    where: {
      email: email,
    },
  });
  return user;
}

export async function changeEmail(
  prevState: ChangeEmailState,
  formData: FormData
) {
  const validatedFields = ChangeEmail.safeParse({
    currentEmail: formData.get("currentEmail"),
    newEmail: formData.get("newEmail"),
    confirmEmail: formData.get("confirmEmail"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Fields missing, please try again.",
    };
  }

  const { currentEmail, email, confirmEmail } = validatedFields.data;

  try {
    await prisma.User.update({
      where: {
        email: currentEmail,
      },
      data: {
        email: confirmEmail,
      },
    });
  } catch (e: any) {
    return { errors: {}, message: "Something went wrong, please try again." };
  }
  return { errors: {}, message: `Email changed to ${confirmEmail}` };
}

export async function changePassword(
  prevState: ChangePasswordState,
  formData: FormData
) {
  const session = await getServerSession();
  const userEmail = session?.user?.email;

  const validatedFields = ChangePassword.safeParse({
    currentPassword: formData.get("currentPassword"),
    newPassword: formData.get("newPassword"),
    confirmPassword: formData.get("confirmPassword"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Fields missing, please try again.",
    };
  }

  const { currentPassword, confirmPassword } = validatedFields.data;

  try {
    const user = await prisma.User.findUnique({
      where: {
        email: userEmail,
      },
    });

    if (user) {
      const hashedPassword = user.password;
      bcrypt
        .compare(currentPassword, hashedPassword)
        .then(function (hash: boolean) {
          if (hash == false) {
            return {
              errors: { currentPassword: ["Password is incorrect"] },
              message: "",
            };
          }
        });

      await prisma.User.update({
        where: {
          email: userEmail,
        },
        data: {
          password: confirmPassword,
        },
      });
    } else {
      return {
        errors: {},
        message: "Something went wrong, please try again later",
      };
    }
  } catch (e: any) {
    return {
      errors: {},
      message: "Something went wrong, please try again later",
    };
  }
  return { errors: {}, message: "Password successfully changed" };
}

export async function createUser(prevState: RegisterState, formData: FormData) {
  const validatedFields = CreateUser.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
    confirmPassword: formData.get("confirmPassword"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Fields missing, please try again.",
    };
  }

  const { email, password } = validatedFields.data;

  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    await prisma.User.create({
      data: {
        email: email,
        password: hashedPassword,
      },
    });
  } catch (e: any) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      if (e.code === "P2002") {
        if (!formData.get("email")) {
          return {
            errors: { email: ["You must use an email to sign up"] },
            message: "Fields missing, please try again.",
          };
        }
        return {
          errors: { email: ["A new user cannot be created with this email"] },
          message: "",
        };
      }
    }
  }
  revalidatePath("/register");
  redirect("/login");
  return { errors: {}, message: null };
}
