"use client";

import { useState } from "react";
import { sourceSerif } from "@/app/ui/fonts";

type Project = {
  id: number;
  title?: string;
  repo?: string;
  url?: string;
  description?: string;
  images?: any;
};

export default function Projects({ projects }: { projects: Project[] }) {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setModalOpen(false);
  };

  return (
    <div className="flex flex-col w-full p-8">
      <div className="flex justify-center items-center">
        <h1
          className={`text-display mb-testimonialsHeader`}
        >
          Projects
        </h1>
      </div>
      <div className="flex flex-col items-center w-full p-8">
        {projects.map((project, index) => (
          <div
            key={`project-${index}`}
            className="cursor-pointer w-[352px] h-[181px] flex items-center justify-center text-portfolioWhite bg-portfolioBlue mb-projectTile"
            onClick={() => openModal(project) as any} // Specify the type here
          >
            {project.title}
          </div>
        ))}
      </div>

      {isModalOpen && selectedProject && (
        <Modal project={selectedProject} closeModal={closeModal} />
      )}
    </div>
  );
}

function Modal({
  project,
  closeModal,
}: {
  project: Project;
  closeModal: () => void;
}) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white border-[1px] border-portfolioBlack p-8 flex flex-col">
        <div className="flex justify-end w-full">
          <button className="p-2 bg-gray-300" onClick={closeModal}>
            x
          </button>
        </div>
        <div className="flex w-full">
          <div className="flex flex-col w-1/3"></div>
          <div className="flex flex-col w-2/3">
            <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
            <p className="mb-2">
              Github Repo:{" "}
              <a className="text-portfolioBlue underline" href={project.repo}>
                {project.repo}
              </a>
            </p>
            <p className="mb-2">
              URL:{" "}
              <a className="text-portfolioBlue underline" href={project.url}>
                {project.url}
              </a>
            </p>
            <p className="mb-2">{project.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
