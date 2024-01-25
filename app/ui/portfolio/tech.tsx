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
    <div id="skills" className="bg-portfolioPrimary p-8 h-auto w-full">
      <div className="flex w-full flex-col md:flex-row">
        <div className="flex justify-center items-center w-full md:w-1/3 mb-12 px-4 md:border-r border-portfolioSecondary">
          <div className="w-full flex flex-col items-center">
            <div className="text-portfolioPrimary flex items-center justify-center bg-portfolioSecondary h-button rounded-full text-portfolioWhite min-w-[160px] w-fit mx-2 my-2 drop-shadow-xl">
              Skills
            </div>
            <p className="font-bold text-displayMobile md:text-display text-center drop-shadow-md">
              What's Your Tech Stack?
            </p>
            <p className="text-center drop-shadow-md text-[18px]">
              The tools I use to get the job done
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center w-full md:w-2/3">
          <div className="flex flex-col items-center justify-center w-full h-full">
            <div className="flex w-full items-center justify-center">
              <div className="w-full md:w-2/3 text-[24px]">{experience}</div>
            </div>
            <div className="flex w-full md:w-2/3 p-8 items-center justify-center flex-wrap">
              {technologies?.map((skill: string, index) => (
                <div
                  key={`technology-${index}`}
                  className="text-portfolioPrimary flex items-center justify-center bg-portfolioSecondary h-button rounded-full text-portfolioWhite min-w-[160px] w-fit mx-2 my-2 drop-shadow-xl"
                >
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
