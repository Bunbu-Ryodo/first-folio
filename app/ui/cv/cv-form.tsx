"use client";
import Link from "next/link";
import React, { useState, ChangeEvent } from "react";
import { useFormState } from "react-dom";
import SubmitButton from "@/app/ui/general-ui/submit-button";
import { uploadCV } from "@/app/lib/actions";
import { FiPaperclip } from "react-icons/fi";

const initialState = {
  errors: {},
  message: "",
};

export default function CVForm({ pathname }: { pathname: string }) {
  const [state, dispatch] = useFormState(uploadCV, initialState);
  const [cv, setCV] = useState<File>();
  return (
    <div className="flex flex-col md:w-1/3 px-2">
      <form action={dispatch}>
        <div className="w-full">
          <label className="opacity-0 animate-fade-in-slowest text-monokaiPink text-informational">
            &lt;Upload CV && Get Hired&gt;
          </label>
          <input
            type="file"
            name="cv"
            onChange={(e) => {
              if (e.target.files && e.target.files.length > 0) {
                setCV(e.target.files[0]);
              }
            }}
            accept="application/pdf"
            className="focus:border-monokaiOrange focus:ring-[1px] focus:ring-monokaiOrange file:cursor-pointer cursor-pointer w-full min-w-[320px] opacity-0 animate-fade-in rounded-md text-monokaiYellow bg-transparent border-[1px] px-inputX py-inputY border-1 border-monokaiBlue placeholder:text-monokaiOrange mt-inputLabel mb-formInput text-input
                                file:mr-4 file:py-2 file:px-4
                                file:rounded-full file:border-0
                                file:text-sm file:font-semibold
                                file:bg-gunMetal file:text-monokaiPink
                                hover:file:gunMetalHover
                            "
          ></input>
          <SubmitButton noFlex1={false} label="UploadCV"></SubmitButton>
          {pathname && (
            <div className="flex w-full justify-center items-center p-2">
              <>
                <FiPaperclip className="text-monokaiOrange mr-2" />
                <span className="text-monokaiOrange">{pathname}</span>
              </>
            </div>
          )}
          {state?.message && (
            <div
              key={state.message}
              className="opacity-0 animate-fade-in mt-2 mb-2 text-center text-monokaiPurple"
            >
              {state.message}
            </div>
          )}
        </div>
      </form>
    </div>
  );
}
