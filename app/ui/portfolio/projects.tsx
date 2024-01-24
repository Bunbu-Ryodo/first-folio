"use client";

import { useState } from "react";
import { sourceSerif } from "@/app/ui/fonts";
import Image from "next/image";

type Project = {
  id: number;
  title?: string;
  repo?: string;
  url?: string;
  description?: string;
  imageUrls?: string[];
  imagePaths?: string;
};

export default function Projects({ projects }: { projects: Project[] }) {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const colors = ["#E4BB97", "#584B53", "#9D5C63"];

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setModalOpen(false);
  };

  function getBgColor(index: number) {
    if (index % 3 === 0) {
      return "bg-[#9D5C63]";
    } else if ((index - 1) % 3 === 0) {
      return "bg-[#584B53]";
    } else {
      return "bg-[#E4BB97]";
    }
  }

  return (
    <div
      id="work"
      className="flex flex-col w-full p-8 bg-portfolioSeashell items-center"
    >
      <div
        id="projectsScroller"
        className="flex min-w-[320px] w-1/3 p-8 overflow-x-scroll"
      >
        {projects.map((project, index) => (
          <div
            key={`project-${index}`}
            className={`cursor-pointer min-w-[320px] min-h-[400px] flex items-center justify-center text-portfolioWhite border-[1px] border-portfolioDesert drop-shadow-2xl ${getBgColor(
              index
            )} rounded mb-[24px] mx-2`}
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
      <div className="bg-white border-[1px] border-portfolioBlack p-6 flex flex-col">
        <div className="flex justify-end w-full">
          <button className="p-2 hover:text-portfolioGrey" onClick={closeModal}>
            x
          </button>
        </div>
        <div className="flex flex-col w-full">
          <div className="flex">
            <div className="flex flex-col w-2/3">
              <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
              <p className="mb-2">
                Github Repo:{" "}
                <a
                  className="text-portfolioBlue underline"
                  href={project.repo}
                  target="_blank"
                >
                  {project.repo}
                </a>
              </p>
              <p className="mb-2">
                URL:{" "}
                <a
                  className="text-portfolioBlue underline"
                  href={project.url}
                  target="_blank"
                >
                  {project.url}
                </a>
              </p>
              <p className="mb-2">{project.description}</p>
            </div>
          </div>

          <div className="flex items-center overflow-scroll w-full">
            {project.imageUrls?.map((image) => (
              <Image
                key={`screenshot-${image}`}
                src={image}
                alt="screenshot"
                className="m-2"
                height={600}
                width={800}
              ></Image>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
