"use client";
import React, { useState, ChangeEvent } from "react";
import Link from "next/link";
import { saveIntroduction, getIntroduction } from "@/app/lib/actions";
import { useFormState } from "react-dom";
import SubmitButton from "@/app/ui/general-ui/submit-button";

const initialState = {
  errors: {},
  message: null,
};

export default function IntroduceYourself({
  initialName,
  initialJobTitle,
  initialBio,
}: {
  initialName: string;
  initialJobTitle: string;
  initialBio: string;
}) {
  const [state, dispatch] = useFormState(saveIntroduction, initialState);
  const [name, setName] = useState(initialName);
  const [jobTitle, setJobTitle] = useState(initialJobTitle);
  const [bio, setBio] = useState(initialBio);

  return (
    <div className="flex flex-col items-center w-full mt-[24px] md:w-1/2 px-2">
      <div className="flex flex-col justify-center w-full text-monokaiYellow text-displayMobile md:text-header text-center p-2 h-headerBanner mb-titleHeader">
        <span className="opacity-0 animate-fade-in-slower">
          Introduce Yourself
        </span>
      </div>
      <form action={dispatch}>
        <label className="opacity-0 animate-fade-in-slowest text-monokaiPink text-informational">
          &lt;Your Name&gt;
        </label>
        <br></br>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          name="name"
          value={name}
          className="opacity-0 animate-fade-in w-full rounded-md text-monokaiYellow bg-transparent border-[1px] px-inputX py-inputY border-1 border-monokaiBlue placeholder:text-monokaiOrange mt-inputLabel mb-formInput text-input"
        ></input>
        <label className="opacity-0 animate-fade-in-slowest text-monokaiPink text-informational">
          &lt;Job Title&gt;
        </label>
        <br></br>
        <input
          type="text"
          onChange={(e) => setJobTitle(e.target.value)}
          name="job_title"
          value={jobTitle}
          className="opacity-0 animate-fade-in w-full rounded-md text-monokaiYellow bg-transparent border-[1px] px-inputX py-inputY border-1 border-monokaiBlue placeholder:text-monokaiOrange mt-inputLabel mb-formInput text-input"
        ></input>
        <label className="opacity-0 animate-fade-in-slowest text-monokaiPink text-informational">
          &lt;Write a Short Bio&gt;
        </label>
        <br></br>
        <textarea
          name="bio"
          onChange={(e) => setBio(e.target.value)}
          value={bio}
          className="h-smallTextarea opacity-0 animate-fade-in w-full rounded-md text-monokaiYellow bg-transparent border-[1px] px-inputX py-inputY border-1 border-monokaiBlue placeholder:text-monokaiOrange mt-inputLabel mb-formInput text-input"
        ></textarea>
        <div className="flex w-full justify-between">
          <SubmitButton noFlex1={false} label="Save Progress()"></SubmitButton>
          <Link href="/tech" className="flex-1 ml-[16px]">
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
      </form>
    </div>
  );
}
