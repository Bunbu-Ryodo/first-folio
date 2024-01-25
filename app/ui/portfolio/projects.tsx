"use client";

import { useState, useRef } from "react";
import { robotoMono, jetbrains } from "@/app/ui/fonts";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { MdHttp } from "react-icons/md";
import { FaCircleChevronRight, FaCircleChevronLeft } from "react-icons/fa6";
import { FaRegWindowClose } from "react-icons/fa";

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
    <div id="work" className="flex flex-col w-full p-8 bg-portfolioNeutral">
      <div className="flex justify-center w-full">
        <div className="w-full md:w-1/3 flex flex-col items-center">
          <div className="text-portfolioPrimary flex items-center justify-center bg-portfolioSecondary h-button rounded-full text-portfolioWhite min-w-[160px] w-fit mx-2 my-2 drop-shadow-xl">
            Projects
          </div>
          <p className="font-bold text-displayMobile md:text-display text-center drop-shadow-md">
            Check Out My Work
          </p>
          <p className="text-center drop-shadow-md text-[18px]">
            See the results. Inspect the code.
          </p>
        </div>
      </div>
      <div className="flex justify-between items-center w-full">
        <div onClick={() => handleScroll("left")}>
          <FaCircleChevronLeft className="h-[48px] w-[48px] cursor-pointer text-portfolioSecondary hover:text-portfolioButtonHover active:text-portfolioButtonActive" />
        </div>
        <div
          id="projectsScroller"
          ref={projectsScrollerRef}
          className="rounded-lg drop-shadow-xl flex min-w-[320px] w-1/3 p-8 overflow-x-scroll"
        >
          {projects.map((project, index) => (
            <div
              key={`project-${index}`}
              className={`cursor-pointer min-w-[320px] min-h-[400px] flex items-center justify-center text-portfolioWhite drop-shadow-2xl text-4xl ${getBgColor(
                index
              )} ${getTextColor(index)} ${
                jetbrains.className
              } rounded mb-[24px] mx-2`}
              onClick={() => openModal(project) as any} // Specify the type here
            >
              {project.title}
            </div>
          ))}
        </div>
        <div onClick={() => handleScroll("right")}>
          <FaCircleChevronRight className="h-[48px] w-[48px] cursor-pointer text-portfolioSecondary hover:text-portfolioButtonHover active:text-portfolioButtonActive" />
        </div>
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
      className="fixed inset-0 flex items-center justify-center bg-glass z-50"
    >
      <div className="bg-portfolioPrimary p-8 flex flex-col">
        <div className="flex w-full justify-between mb-4 pl-4">
          <h2 className={`${jetbrains.className} text-2xl font-bold`}>
            {project.title}
          </h2>
          <div
            className="flex items-center justify-center p-2 curso-pointer text-[18px]"
            onClick={closeModal}
          >
            <FaRegWindowClose className="h-[24px] w-[24px] cursor-pointer text-portfolioSecondary hover:text-portfolioButtonHover active:text-portfolioButtonActive" />
          </div>
        </div>
        <div className="flex flex-col w-full">
          <div className="flex">
            <div className="flex flex-col w-full px-4">
              <div className="mb-2 flex items-center text-[20px]">
                <FaGithub className="h-icon w-icon mr-2 " />
                Github Repo:
                <a
                  className=" underline ml-2"
                  href={project.repo}
                  target="_blank"
                >
                  {project.repo}
                </a>
              </div>
              <div className="mb-2 flex items-center text-[20px]">
                <MdHttp className="h-icon w-icon mr-2" />
                URL:
                <a
                  className=" underline ml-2"
                  href={project.repo}
                  target="_blank"
                >
                  {project.url}
                </a>
              </div>
              <p className="mb-2 text-[20px]">{project.description}</p>
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
