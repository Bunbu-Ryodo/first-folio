import BreadCrumbs from "@/app/ui/general-ui/breadcrumbs";
import NextButton from "@/app/ui/general-ui/next-button";
import ProjectForm from "@/app/ui/projects/project-form";
import { getProjects } from "@/app/lib/actions";
import AddProject from "@/app/ui/projects/add-new-project";
import RemoveProject from "@/app/ui/projects/remove-project";

type Project = {
  id: number;
  title?: string | undefined;
  url?: string | undefined;
  repo?: string | undefined;
  description?: string | undefined;
  images?: File[] | undefined;
};

export default async function Projects() {
  const projects = await getProjects();

  return (
    <main className="h-full flex-col container font-light">
      <BreadCrumbs
        links={["mystuff", "introduce", "tech"]}
        current={"projects"}
      ></BreadCrumbs>
      <NextButton link={"socials"}></NextButton>
      <div className="flex flex-col justify-center w-full text-monokaiYellow text-header font-medium text-center p-2 h-headerBanner mb-titleHeader">
        <span className="opacity-0 animate-fade-in-slower">
          Showcase Your Work
        </span>
      </div>
      {projects &&
        projects.reverse().map((project: Project) => (
          <>
            <RemoveProject
              key={`Remove-${project.id}`}
              id={project.id}
            ></RemoveProject>
            <ProjectForm
              key={`Old-${project.id}`}
              id={project.id}
              initialTitle={project.title}
              initialRepo={project.repo}
              initialUrl={project.url}
              initialDescription={project.description}
            ></ProjectForm>
          </>
        ))}
      {(!projects || projects.length === 0) && (
        <ProjectForm
          key={`New Project-${Math.random()}`}
          id={undefined}
          initialTitle={""}
          initialRepo={""}
          initialUrl={""}
          initialDescription={""}
        ></ProjectForm>
      )}
      <AddProject></AddProject>
    </main>
  );
}
