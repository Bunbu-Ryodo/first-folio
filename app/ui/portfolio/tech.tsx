"use client";
import { useState, useEffect } from "react";
import { robotoMono, sourceSerif } from "@/app/ui/fonts";
import SkillTag from "@/app/ui/portfolio/skill-tag";

type Tech = {
  id: number;
  technologies?: string[];
  experience?: string[];
  developerId: string;
};

export default function Tech({ tech }: { tech: Tech }) {
  const { technologies, experience } = tech;
  const [scrollPosition, setScrollPosition] = useState(0);
  const [visibleSkills, setVisibleSkills] = useState<number[]>([]);

  const handleScroll = () => {
    const currentPosition =
      window.scrollY || document.documentElement.scrollTop;
    setScrollPosition(currentPosition);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const getFadeClass = (index: number) => {
    const positionThresholds = [500, 400, 300];
    const techSection = document.getElementById("techSection");
    const threshold = positionThresholds[index];

    if (techSection) {
      if (techSection.getBoundingClientRect().top <= threshold) {
        return "animate-fade-in-slowest";
      }
    }

    return "";
  };

  useEffect(() => {
    const techSection = document.getElementById("techSection");
    const threshold = 300;

    if (techSection && techSection.getBoundingClientRect().top <= threshold) {
      const newVisibleSkills = technologies?.map((_skill, index) =>
        setTimeout(
          () => setVisibleSkills((prevSkills) => [...prevSkills, index]),
          500 * (index + 1)
        )
      );
      // Clear timeouts on component unmount
      return () => newVisibleSkills?.forEach(clearTimeout);
    }

    return;
  }, [technologies]);

  const popSkillTag = (index: number) => {
    console.log("Pop");
    return visibleSkills.includes(index) ? "animate-sudden-appear" : "";
  };

  return (
    <div
      id="techSection"
      className="h-screen border-t border-b border-portfolioBlack"
    >
      <div className="sticky top-0">
        <div className="flex flex-col w-full px-8 py-8 items-center justify-center">
          <div className="flex justify-center items-center">
            <h1
              className={`opacity-0 text-display ${
                sourceSerif.className
              } mb-testimonialsHeader ${getFadeClass(0)} `}
            >
              Skills
            </h1>
          </div>
          <div className="flex justify-center items-center">
            <p
              className={`opacity-0 ${getFadeClass(
                1
              )} text-experienceMobile md:text-experience`}
            >
              {experience ? experience : ""}
            </p>
          </div>
          <div className="flex flex-row w-full md:w-1/3 items-center justify-center p-8 flex-wrap">
            {technologies?.map((skill: string, index) => (
              <div
                key={`technology-${index}`}
                className={`opacity-0 flex items-center justify-center bg-portfolioBlack h-button rounded-full text-portfolioWhite min-w-[160px] w-fit mx-2 my-2 ${getFadeClass(
                  2
                )}`}
              >
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}