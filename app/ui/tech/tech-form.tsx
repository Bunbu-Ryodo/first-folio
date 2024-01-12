"use client";
import React, { useState } from "react";
import TechnologyCheckbox from "@/app/ui/tech/technology-checkbox";
import { technologies } from "@/app/lib/data";
import { useFormState } from "react-dom";
import { saveTech } from "@/app/lib/actions";
import SubmitButton from "@/app/ui/general-ui/submit-button";
import Link from "next/link";

const initialState = {
  errors: {},
  message: null,
};

export default function TechForm({
  initialTechnologies,
  initialExperience,
}: {
  initialTechnologies: string[];
  initialExperience: string;
}) {
  const [state, dispatch] = useFormState(saveTech, initialState);
  const [experience, setExperience] = useState(initialExperience);

  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex w-full justify-center mb-titleHeader">
        <span className="text-header text-monokaiYellow">Tech Stack</span>
      </div>
      <form action={dispatch}>
        <div className="flex flex-col md:flex-row w-full h-full">
          <div className="flex w-full md:w-1/2 mb-formInput justify-center md:justify-end">
            <div className="flex flex-col w-full md:w-2/3 mx-2">
              <label className="opacity-0 animate-fade-in-slowest text-monokaiPink text-informational w-full">
                &lt;Pick the Stuff You Use&gt;
              </label>
              <br></br>
              <div className="flex flex-wrap mb-formInput">
                {technologies.map((technology, index) => (
                  <TechnologyCheckbox
                    initialTechnologies={initialTechnologies}
                    key={index}
                    value={technology.value}
                    id={technology.id}
                  ></TechnologyCheckbox>
                ))}
              </div>
            </div>
          </div>
          <div className="flex w-full md:w-1/2 justify-center md:justify-start">
            <div className="flex flex-col w-full md:w-2/3 mx-2">
              <label className="opacity-0 animate-fade-in-slowest text-monokaiPink text-informational">
                &lt;Describe your Skillset/Experience&gt;
              </label>
              <br></br>
              <textarea
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                name="experience"
                className="h-largeTextarea opacity-0 animate-fade-in w-full rounded-md text-monokaiYellow bg-transparent border-[1px] px-inputX py-inputY border-1 border-monokaiBlue placeholder:text-monokaiOrange mt-inputLabel mb-formInput text-input"
              ></textarea>
              <div className="flex w-full justify-between">
                <SubmitButton label="Save Progress()"></SubmitButton>
                <Link href="/projects" className="flex-1 ml-[16px]">
                  <button className="w-full bg-transparent border-2 border-monokaiGreen text-monokaiGreen rounded h-button hover:bg-gunMetalHover active:bg-gunMetalActive text-button">
                    Skip()
                  </button>
                </Link>
              </div>
              {state?.message && (
                <div
                  key={state.message}
                  className="opacity-0 animate-fade-in mt-2 mb-2 text-monokaiPurple"
                >
                  {state.message}
                </div>
              )}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
