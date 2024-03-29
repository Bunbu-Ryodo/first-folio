"use client";
import SubmitButton from "@/app/ui/general-ui/submit-button";
import { changePassword } from "@/app/lib/actions";
import { useFormState } from "react-dom";

const initialState = {
  errors: {},
  message: "",
};

export default function ChangePasswordForm() {
  const [state, dispatch] = useFormState(changePassword, initialState);
  return (
    <div className="w-full flex items-center md:flex-col md:w-1/2 md:justify-center md:h-full mb-formEnd">
      <div className="w-full flex flex-col items-center p-2">
        <div className="flex flex-col justify-center w-full text-monokaiYellow text-displayMobile md:text-header text-center mb-title">
          <span className="opacity-0 animate-fade-in-slower">
            Change Your Password
          </span>
        </div>
        <form action={dispatch}>
          <label className="opacity-0 animate-fade-in-slowest text-monokaiPink text-informational">
            &lt;Enter Current Password&gt;
          </label>
          <br></br>
          <input
            type="password"
            name="currentPassword"
            className="focus:border-monokaiOrange focus:ring-[1px] focus:ring-monokaiOrange opacity-0 animate-fade-in w-full rounded-md text-monokaiYellow bg-transparent border-[1px] px-inputX py-inputY border-1 border-monokaiBlue placeholder:text-monokaiOrange mt-inputLabel mb-formInput text-input"
          ></input>
          <label className="opacity-0 animate-fade-in-slowest text-monokaiPink text-informational">
            &lt;Set a New Password&gt;
          </label>
          <br></br>
          <input
            type="password"
            name="newPassword"
            className="focus:border-monokaiOrange focus:ring-[1px] focus:ring-monokaiOrange opacity-0 animate-fade-in w-full rounded-md text-monokaiYellow bg-transparent border-[1px] px-inputX py-inputY border-1 border-monokaiBlue placeholder:text-monokaiOrange mt-inputLabel mb-formInput text-input"
          ></input>
          <label className="opacity-0 animate-fade-in-slowest text-monokaiPink text-informational">
            &lt;Confirm New Password&gt;
          </label>
          <br></br>
          <input
            type="password"
            name="confirmPassword"
            className="focus:border-monokaiOrange focus:ring-[1px] focus:ring-monokaiOrange opacity-0 animate-fade-in w-full rounded-md text-monokaiYellow bg-transparent border-[1px] px-inputX py-inputY border-1 border-monokaiBlue placeholder:text-monokaiOrange mt-inputLabel mb-formInput text-input"
          ></input>
          {state?.errors &&
            state.errors?.confirmPassword &&
            state.errors.confirmPassword.map((error: string) => (
              <div
                key={error}
                className="opacity-0 animate-fade-in mt-2 mb-2 text-monokaiPurple"
              >
                {error}
              </div>
            ))}
          <SubmitButton noFlex1={false} label="Reset Password"></SubmitButton>
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
    </div>
  );
}
