"use client";

import React, { useState, ChangeEvent } from "react";
import SubmitButton from "@/app/ui/general-ui/submit-button";
import { useFormState } from "react-dom";
import { saveEndorsements } from "@/app/lib/actions";

const initialState = { errors: {}, message: "" };

export default function EndorsementForm({
  id,
  initialName,
  initialComments,
}: {
  id: number | undefined;
  initialName: string | undefined;
  initialComments: string | undefined;
}) {
  const [state, dispatch] = useFormState(saveEndorsements, initialState);
  const [name, setName] = useState(initialName);
  const [comments, setComments] = useState(initialComments);

  return (
    <form action={dispatch} className="w-full mb-12">
      <div className="flex flex-col w-full">
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
          &lt;Comments&gt;
        </label>
        <textarea
          name="comments"
          onChange={(e) => setComments(e.target.value)}
          value={comments}
          className="h-endorsementTextarea opacity-0 animate-fade-in w-full rounded-md text-monokaiYellow bg-transparent border-[1px] px-inputX py-inputY border-1 border-monokaiBlue placeholder:text-monokaiOrange mt-inputLabel mb-formInput text-input"
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
        <div className="w-2/3 xl:w-1/3 self-center">
          <SubmitButton noFlex1={true} label="SaveEndorsement()"></SubmitButton>
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
