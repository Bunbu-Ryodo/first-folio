"use client";
import React, { useState, ChangeEvent } from "react";
import Link from "next/link";
import { useFormState } from "react-dom";
import { saveSocials } from "@/app/lib/actions";
import SubmitButton from "@/app/ui/general-ui/submit-button";

const initialState = {
  errors: {},
  message: null,
};

export default function SocialsForm({
  initialEmail,
  initialX,
  initialInstagram,
  initialFacebook,
  initialLinkedIn,
  initialWebsite,
}: {
  initialEmail: string;
  initialX: string;
  initialInstagram: string;
  initialFacebook: string;
  initialLinkedIn: string;
  initialWebsite: string;
}) {
  const [state, dispatch] = useFormState(saveSocials, initialState);
  const [contact_email, setContactEmail] = useState(initialEmail);
  const [x, setX] = useState(initialX);
  const [instagram, setInstagram] = useState(initialInstagram);
  const [facebook, setFacebook] = useState(initialFacebook);
  const [linked_in, setLinkedIn] = useState(initialLinkedIn);
  const [website, setWebsite] = useState(initialWebsite);

  return (
    <div className="flex flex-col items-center w-full mt-[24px] mr-[16px] md:w-1/2">
      <div className="flex flex-col justify-center w-full text-monokaiYellow text-displayMobile md:text-header text-center p-2 h-headerBanner mb-titleHeader">
        <span className="opacity-0 animate-fade-in-slower">Socials</span>
      </div>
      <form action={dispatch}>
        <label className="opacity-0 animate-fade-in-slowest text-monokaiPink text-informational">
          &lt;Contact Email&gt;
        </label>
        <br></br>
        <input
          type="email"
          onChange={(e) => setContactEmail(e.target.value)}
          name="contact_email"
          value={contact_email}
          className="opacity-0 animate-fade-in w-full rounded-md text-monokaiYellow bg-transparent border-[1px] px-inputX py-inputY border-1 border-monokaiBlue placeholder:text-monokaiOrange mt-inputLabel mb-formInput text-input"
        ></input>
        <label className="opacity-0 animate-fade-in-slowest text-monokaiPink text-informational">
          &lt;X&gt;
        </label>
        <br></br>
        <input
          type="text"
          onChange={(e) => setX(e.target.value)}
          name="x"
          value={x}
          className="opacity-0 animate-fade-in w-full rounded-md text-monokaiYellow bg-transparent border-[1px] px-inputX py-inputY border-1 border-monokaiBlue placeholder:text-monokaiOrange mt-inputLabel mb-formInput text-input"
        ></input>
        <label className="opacity-0 animate-fade-in-slowest text-monokaiPink text-informational">
          &lt;Instagram&gt;
        </label>
        <br></br>
        <input
          type="text"
          onChange={(e) => setInstagram(e.target.value)}
          name="instagram"
          value={instagram}
          className="opacity-0 animate-fade-in w-full rounded-md text-monokaiYellow bg-transparent border-[1px] px-inputX py-inputY border-1 border-monokaiBlue placeholder:text-monokaiOrange mt-inputLabel mb-formInput text-input"
        ></input>
        <label className="opacity-0 animate-fade-in-slowest text-monokaiPink text-informational">
          &lt;Facebook&gt;
        </label>
        <br></br>
        <input
          type="text"
          onChange={(e) => setFacebook(e.target.value)}
          name="facebook"
          value={facebook}
          className="opacity-0 animate-fade-in w-full rounded-md text-monokaiYellow bg-transparent border-[1px] px-inputX py-inputY border-1 border-monokaiBlue placeholder:text-monokaiOrange mt-inputLabel mb-formInput text-input"
        ></input>
        <label className="opacity-0 animate-fade-in-slowest text-monokaiPink text-informational">
          &lt;Linked In&gt;
        </label>
        <br></br>
        <input
          type="text"
          onChange={(e) => setLinkedIn(e.target.value)}
          name="linked_in"
          value={linked_in}
          className="opacity-0 animate-fade-in w-full rounded-md text-monokaiYellow bg-transparent border-[1px] px-inputX py-inputY border-1 border-monokaiBlue placeholder:text-monokaiOrange mt-inputLabel mb-formInput text-input"
        ></input>
        <label className="opacity-0 animate-fade-in-slowest text-monokaiPink text-informational">
          &lt;Website&gt;
        </label>
        <br></br>
        <input
          type="text"
          onChange={(e) => setWebsite(e.target.value)}
          name="website"
          value={website}
          className="opacity-0 animate-fade-in w-full rounded-md text-monokaiYellow bg-transparent border-[1px] px-inputX py-inputY border-1 border-monokaiBlue placeholder:text-monokaiOrange mt-inputLabel mb-formInput text-input"
        ></input>
        <div className="flex w-full justify-between">
          <SubmitButton noFlex1={false} label="Save Progress()"></SubmitButton>
          <Link href="/cv" className="flex-1 ml-[16px]">
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
