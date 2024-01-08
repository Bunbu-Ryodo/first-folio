import BreadCrumbs from '@/app/ui/breadcrumbs';
import NextButton from '@/app/ui/next-button';
import ProjectForm from '@/app/ui/project-form';

export default function Projects(){
    return(
        <main className="h-full flex-col container font-light">
            <BreadCrumbs links={["mystuff", "introduce", "tech"]} current={"projects"}></BreadCrumbs>
            <NextButton link={"socials"}></NextButton>
            <ProjectForm></ProjectForm>
        </main>
    )
}