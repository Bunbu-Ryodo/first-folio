"use client";
import SubmitButton from "@/app/ui/general-ui/submit-button";
import { changeEmail } from "@/app/lib/actions";
import { useFormState } from "react-dom";

const initialState = {
  errors: {},
  message: "",
};

export type ISODateString = string;

export interface DefaultSession {
  user?: {
    name?: string | null;
    email?: string | null;
    image?: string | null;
  };
  expires: ISODateString;
}

export default function ChangeEmail({
  session,
}: {
  session: DefaultSession | null;
}) {
  const currentEmail = session?.user?.email;
  const [state, dispatch] = useFormState(changeEmail, initialState);
  return (
    <div className="flex flex-col items-center w-full mt-[24px] mr-[16px] md:w-1/2">
      <div className="w-full text-monokaiYellow text-displayMobile md:text-header font-medium text-center p-2 h-headerBanner mb-titleHeader">
        <span className="opacity-0 animate-fade-in-slower">
          Change Your Email
        </span>
      </div>
      <form action={dispatch}>
        <label className="opacity-0 animate-fade-in-slowest text-monokaiPink text-informational">
          &lt;Current Email&gt;
        </label>
        <br></br>
        <input
          type="email"
          name="currentEmail"
          className="opacity-0 animate-fade-in w-full rounded-md text-monokaiYellow bg-transparent border-[1px] px-inputX py-inputY border-1 border-monokaiBlue placeholder:text-monokaiOrange mt-inputLabel mb-formInput text-input"
          value={currentEmail ? currentEmail : ""}
          readOnly
        ></input>
        <label className="opacity-0 animate-fade-in-slowest text-monokaiPink text-informational">
          &lt;Set a New Email&gt;
        </label>
        <br></br>
        <input
          type="email"
          name="newEmail"
          className="opacity-0 animate-fade-in w-full rounded-md text-monokaiYellow bg-transparent border-[1px] px-inputX py-inputY border-1 border-monokaiBlue placeholder:text-monokaiOrange mt-inputLabel mb-formInput text-input"
        ></input>
        <label className="opacity-0 animate-fade-in-slowest text-monokaiPink text-informational">
          &lt;Confirm New Email&gt;
        </label>
        <br></br>
        <input
          type="email"
          name="confirmEmail"
          className="opacity-0 animate-fade-in w-full rounded-md text-monokaiYellow bg-transparent border-[1px] px-inputX py-inputY border-1 border-monokaiBlue placeholder:text-monokaiOrange mt-inputLabel mb-formInput text-input"
        ></input>
        {state?.errors &&
          state.errors?.confirmEmail &&
          state.errors.confirmEmail.map((error: string) => (
            <div
              key={error}
              className="opacity-0 animate-fade-in mt-2 mb-2 text-monokaiPurple"
            >
              {error}
            </div>
          ))}
        <SubmitButton noFlex1={false} label="Save New Email"></SubmitButton>
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
