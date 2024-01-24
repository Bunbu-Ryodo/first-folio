"use client";
import { useState, useEffect } from "react";

type Tech = {
  id: number;
  technologies?: string[];
  experience?: string[];
  developerId: string;
};

export default function Tech({ tech }: { tech: Tech }) {
  const { technologies, experience } = tech;

  return (
    <div id="skills" className="bg-portfolioDesert p-8 h-auto w-full">
      <div className="flex flex-col items-center justify-center w-full h-full">
        <div className="flex w-full items-center justify-center">
          <div className="w-full md:w-2/3 text-[24px]">{experience}</div>
        </div>
        <div className="flex w-full md:w-2/3 p-8 items-center justify-center flex-wrap">
          {technologies?.map((skill: string, index) => (
            <div
              key={`technology-${index}`}
              className="text-portfolioDesert flex items-center justify-center bg-portfolioWenge h-button rounded-full text-portfolioWhite min-w-[160px] w-fit mx-2 my-2 drop-shadow-xl"
            >
              <span>{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
