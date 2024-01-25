"use client";

import { useState, useRef } from "react";
import { robotoMono } from "@/app/ui/fonts";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { MdHttp } from "react-icons/md";

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
  const projectsScrollerRef = useRef<HTMLDivElement | null>(null);

  type ScrollDirection = "left" | "right";

  const handleScroll = (direction: ScrollDirection) => {
    const container = projectsScrollerRef.current;

    if (container) {
      const scrollAmount = 200; // Adjust the scroll amount as needed

      if (direction === "left") {
        container.scrollLeft -= scrollAmount;
      } else if (direction === "right") {
        container.scrollLeft += scrollAmount;
      }
    }
  };

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

  function getTextColor(index: number) {
    if (index % 3 === 0) {
      return "text-[#D6E3F8]";
    } else if ((index - 1) % 3 === 0) {
      return "text-[#E4BB97]";
    } else {
      return "text-[#584B53]";
    }
  }

  return (
    <div
      id="work"
      className="flex w-full p-8 bg-portfolioNeutral justify-between items-center"
    >
      <div
        className={`${robotoMono.className} flex h-[48px] w-[48px] items-center justify-center text-portfolioSecondary rounded-full  dropshadow-xl text-3xl cursor-pointer`}
        onClick={() => handleScroll("left")}
      >
        &lt;
      </div>
      <div
        id="projectsScroller"
        ref={projectsScrollerRef}
        className="flex min-w-[320px] w-1/3 p-8 overflow-x-scroll"
      >
        {projects.map((project, index) => (
          <div
            key={`project-${index}`}
            className={`cursor-pointer min-w-[320px] min-h-[400px] flex items-center justify-center text-portfolioWhite drop-shadow-2xl text-4xl ${getBgColor(
              index
            )} ${getTextColor(index)} rounded mb-[24px] mx-2`}
            onClick={() => openModal(project) as any} // Specify the type here
          >
            {project.title}
          </div>
        ))}
      </div>
      <div
        className={`${robotoMono.className} flex h-[48px] w-[48px] items-center justify-center text-portfolioSecondary rounded-full dropshadow-xl text-3xl cursor-pointer`}
        onClick={() => handleScroll("right")}
      >
        &gt;
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
    <div
      id="projectModal"
      className="fixed inset-0 flex items-center justify-center bg-glass"
    >
      <div className="bg-portfolioNeutral p-2 flex flex-col">
        <div className="flex justify-end w-full h-[22px] items-center">
          <div
            className="flex items-center justify-center p-2 h-[32px] w-[32px] curso-pointer rounded-full text-portfolioDesert bg-portfolioSecondary cursor-pointer text-[18px]"
            onClick={closeModal}
          >
            <span>x</span>
          </div>
        </div>
        <div className="flex flex-col w-full">
          <div className="flex">
            <div className="flex flex-col w-2/3 px-4">
              <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
              <div className="mb-2 flex items-center">
                <FaGithub className="h-icon w-icon mr-2" />
                Github Repo:
                <a
                  className="text-blue-500 underline ml-2"
                  href={project.repo}
                  target="_blank"
                >
                  {project.repo}
                </a>
              </div>
              <div className="mb-2 flex items-center">
                <MdHttp className="h-icon w-icon mr-2" />
                URL:
                <a
                  className="text-blue-500 underline ml-2"
                  href={project.repo}
                  target="_blank"
                >
                  {project.url}
                </a>
              </div>
              <p className="mb-2">{project.description}</p>
            </div>
          </div>

          {project.imageUrls ? (
            <div className="flex items-center overflow-auto w-full">
              {project.imageUrls.map((image) => (
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
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
}
