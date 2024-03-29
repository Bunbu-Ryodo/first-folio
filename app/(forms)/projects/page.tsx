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
  imagePaths?: string[] | undefined;
};

export default async function Projects() {
  const projects = await getProjects();

  function sortProjects(a: Project, b: Project) {
    return a.id - b.id;
  }

  projects.sort(sortProjects);

  return (
    <main className="h-full container font-light">
      <BreadCrumbs
        links={["mystuff", "introduce", "tech"]}
        current={"projects"}
      ></BreadCrumbs>
      <NextButton link={"endorsements"}></NextButton>
      <div className="flex flex-col justify-center w-full text-monokaiYellow text-displayMobile md:text-header text-center mb-title">
        <span className="opacity-0 animate-fade-in-slower">
          Showcase Your Work
        </span>
      </div>
      {projects &&
        projects.map((project: Project) => (
          <>
            <RemoveProject
              key={`Remove-${project.id}`}
              id={project.id}
            ></RemoveProject>
            <ProjectForm
              key={`Old-${project.id}`}
              id={project.id}
              initialTitle={project.title ? project.title : ""}
              initialRepo={project.repo ? project.repo : ""}
              initialUrl={project.url ? project.url : ""}
              initialDescription={
                project.description ? project.description : ""
              }
              initialPathnames={project.imagePaths ? project.imagePaths : []}
            ></ProjectForm>
          </>
        ))}
      {(!projects || projects.length === 0) && (
        <ProjectForm
          key={`New Project`}
          id={undefined}
          initialTitle={""}
          initialRepo={""}
          initialUrl={""}
          initialDescription={""}
          initialPathnames={[]}
        ></ProjectForm>
      )}
      <AddProject></AddProject>
    </main>
  );
}
