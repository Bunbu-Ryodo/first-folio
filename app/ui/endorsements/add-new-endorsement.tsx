"use client";
import React from "react";
import { addNewEndorsement } from "@/app/lib/actions";
import { useFormState } from "react-dom";
import { useFormStatus } from "react-dom";

const initialState = { errors: {}, message: null };

export default function AddEndorsement() {
  const { pending } = useFormStatus();
  const [state, dispatch] = useFormState(addNewEndorsement, initialState);
  return (
    <form action={dispatch}>
      <div className="flex justify-center w-full">
        <div className="flex w-2/3 justify-center">
          <button
            type="submit"
            disabled={pending}
            className="flex-1  underline text-button text-monokaiPink rounded h-button hover:text-buttonPinkHover active:text-buttonPinkActive mr-[16px] disabled:bg-slate-500 w-full"
            aria-disabled={pending}
          >
            {pending ? "Loading..." : "AddNewEndorsement++"}
          </button>
        </div>
      </div>
    </form>
  );
}
