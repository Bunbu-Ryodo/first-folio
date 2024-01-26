"use client";

import React, { useState, ChangeEvent } from "react";
import SubmitButton from "@/app/ui/general-ui/submit-button";
import { useFormState } from "react-dom";
import { saveEndorsements } from "@/app/lib/actions";
import { FiPaperclip } from "react-icons/fi";

const initialState = { errors: {}, message: "" };

export default function EndorsementForm({
  id,
  index,
  initialName,
  initialComments,
  initialCommenterPhotoPathname,
  initialCommenterLink,
}: {
  id?: number | undefined;
  index?: number;
  initialName?: string | undefined;
  initialComments?: string | undefined;
  initialCommenterPhotoPathname?: string | undefined;
  initialCommenterLink?: string | undefined;
}) {
  const [state, dispatch] = useFormState(saveEndorsements, initialState);
  const [name, setName] = useState(initialName);
  const [commenterLink, setCommenterLink] = useState(initialCommenterLink);
  const [comments, setComments] = useState(initialComments);
  const [commenterPhoto, setCommenterPhoto] = useState<File | undefined>();

  return (
    <form
      action={dispatch}
      key={index}
      className="w-full mb-12 border-b-[1px] border-monokaiBlue"
    >
      <div className="flex flex-col w-full mb-formEnd  ">
        <label className="opacity-0 animate-fade-in-slowest text-monokaiPink text-informational">
          &lt;Name of Referee/Company&gt;
        </label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="opacity-0 animate-fade-in w-full rounded-md text-monokaiYellow bg-transparent border-[1px] px-inputX py-inputY border-1 border-monokaiBlue placeholder:text-monokaiOrange mt-inputLabel mb-informational text-input"
        ></input>
        <label className="opacity-0 animate-fade-in-slowest text-monokaiPink text-informational">
          &lt;Referee Website/Social Media&gt;
        </label>
        <input
          type="text"
          name="commenterLink"
          value={commenterLink}
          onChange={(e) => setCommenterLink(e.target.value)}
          className="opacity-0 animate-fade-in w-full rounded-md text-monokaiYellow bg-transparent border-[1px] px-inputX py-inputY border-1 border-monokaiBlue placeholder:text-monokaiOrange mt-inputLabel mb-informational text-input"
        ></input>
        <label className="opacity-0 animate-fade-in-slowest text-monokaiPink text-informational">
          &lt;Referee Photo&gt;{" "}
          <span className="text-monokaiPurple">- Optional</span>
        </label>
        <input
          type="file"
          name="commenterPhoto"
          onChange={(e) => {
            if (e.target.files && e.target.files.length > 0) {
              console.log(e.target.files[0]);
              setCommenterPhoto(e.target.files[0]);
            }
          }}
          accept="image/jpg, image/png"
          className="file:cursor-pointer cursor-pointer w-full opacity-0 animate-fade-in rounded-md text-monokaiYellow bg-transparent border-[1px] px-inputX py-inputY border-1 border-monokaiBlue placeholder:text-monokaiOrange mt-inputLabel mb-formInput text-input
                                file:mr-4 file:py-2 file:px-4
                                file:rounded-full file:border-0
                                file:text-sm file:font-semibold
                                file:bg-gunMetal file:text-monokaiPink
                                hover:file:bg-gunMetalHover
                            "
        ></input>
        <label className="opacity-0 animate-fade-in-slowest text-monokaiPink text-informational">
          &lt;Comments&gt;
        </label>
        <textarea
          name="comments"
          onChange={(e) => setComments(e.target.value)}
          value={comments}
          className="h-[160px] opacity-0 animate-fade-in w-full rounded-md text-monokaiYellow bg-transparent border-[1px] px-inputX py-inputY border-1 border-monokaiBlue placeholder:text-monokaiOrange mt-inputLabel mb-formInput text-input"
        ></textarea>

        <div className="items-center hidden md:items-end w-full px-2">
          <input
            type="number"
            name="id"
            value={id ? id : ""}
            className="hidden opacity-0 animate-fade-in w-full rounded-md text-monokaiYellow bg-transparent border-[1px] px-inputX py-inputY border-1 border-monokaiBlue placeholder:text-monokaiOrange mt-inputLabel mb-formInput text-input"
            readOnly
          ></input>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2">
            <SubmitButton
              noFlex1={true}
              label="SaveEndorsement()"
            ></SubmitButton>
          </div>

          <div className="items-center flex flex-col md:items-start w-full md:w-1/2 px-2">
            <div className="flex flex-col px-2">
              {initialCommenterPhotoPathname && (
                <div className="flex flex-col">
                  <FiPaperclip className="text-monokaiOrange mr-2" />
                  <span className="text-monokaiOrange">
                    {initialCommenterPhotoPathname}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>

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
  );
}
