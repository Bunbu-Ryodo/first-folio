"use client";
import Link from "next/link";
import React, { useState, FormEvent } from "react";
import SubmitButton from "@/app/ui/general-ui/submit-button";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const response = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });
    console.log({ response });
    if (!response?.error) {
      router.push("/mystuff");
      router.refresh();
    } else {
      setErrorMessage("Invalid Login, please try again");
    }
  };

  return (
    <div className="flex flex-col md:w-1/3">
      <div className="flex flex-col justify-center w-full text-monokaiYellow text-displayMobile md:text-header text-center mb-title">
        <span className="opacity-0 animate-fade-in-slower">Login</span>
      </div>
      <form onSubmit={handleSubmit} className="w-full">
        <label className="opacity-0 animate-fade-in-slowest text-monokaiPink text-informational">
          &lt;Email&gt;
        </label>
        <br></br>
        <input
          type="email"
          name="email"
          className="opacity-0 animate-fade-in w-full rounded-md text-monokaiYellow bg-transparent border-[1px] px-inputX py-inputY border-1 border-monokaiBlue placeholder:text-monokaiOrange mt-inputLabel mb-formInput text-input"
        ></input>
        <label className="opacity-0 animate-fade-in-slowest text-monokaiPink text-informational">
          &lt;Password&gt;
        </label>
        <br></br>
        <input
          type="password"
          name="password"
          className="opacity-0 animate-fade-in w-full rounded-md text-monokaiYellow bg-transparent border-[1px] px-inputX py-inputY border-1 border-monokaiBlue placeholder:text-monokaiOrange mt-inputLabel mb-informational text-input"
        ></input>
        <div className="flex w-full justify-between mt-formInput">
          <SubmitButton noFlex1={false} label="Login()"></SubmitButton>
          <Link href="/register" className="flex-1 ml-[16px]">
            <button className="w-full bg-transparent border-2 border-monokaiGreen text-monokaiGreen rounded h-button hover:bg-gunMetalHover active:bg-gunMetalActive text-button">
              Register()
            </button>
          </Link>
        </div>
        {errorMessage && (
          <div
            key={errorMessage}
            className="opacity-0 animate-fade-in mt-2 mb-2 text-informational text-monokaiPurple"
          >
            {errorMessage}
          </div>
        )}
      </form>
    </div>
  );
}
