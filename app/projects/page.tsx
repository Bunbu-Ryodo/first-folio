import BreadCrumbs from '@/app/ui/breadcrumbs';
import NextButton from '@/app/ui/next-button';
import ProjectForm from '@/app/ui/project-form';
import { getProjects } from '@/app/lib/actions';


type Project = {
    id: number, 
    title?: string | undefined
    url?: string | undefined
    repo?: string | undefined
    description?: string | undefined
    images?: string | undefined
}

export default async function Projects(){
    const projects = await getProjects();
    console.log(projects, "Projects");

    return(
        <main className="h-full flex-col container font-light">
            <BreadCrumbs links={["mystuff", "introduce", "tech"]} current={"projects"}></BreadCrumbs>
            <NextButton link={"socials"}></NextButton>
            <div className="flex flex-col justify-center w-full text-monokaiYellow text-header font-medium text-center p-2 h-headerBanner mb-titleHeader"><span className="opacity-0 animate-fade-in-slower">Showcase Your Work</span></div>
            {
                projects ? projects.map((project:Project) => {
                    <ProjectForm key={project.id} initialTitle={project.title} initialRepo={project.repo} initialUrl={project.url} initialDescription={project.description} initialImages={project.images}></ProjectForm>
                })
                :
                <ProjectForm initialTitle={""} initialRepo={""} initialUrl={""} initialDescription={""} initialImages={""}></ProjectForm>
            }
            
        </main>
    )
}