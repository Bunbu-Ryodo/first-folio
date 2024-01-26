"use client";
import { deleteEndorsement } from "@/app/lib/actions";
import { useFormState } from "react-dom";
import clsx from "clsx";

const initialState = { errors: {}, message: null };

export default function RemoveEndorsement({ id }: { id: number | undefined }) {
  const [state, dispatch] = useFormState(deleteEndorsement, initialState);
  return (
    <form action={dispatch} className="w-full">
      <div className="flex flex-row justify-end px-2">
        <input
          type="number"
          name="id"
          value={id ? id : ""}
          className="hidden opacity-0 animate-fade-in w-full rounded-md text-monokaiYellow bg-transparent border-[1px] px-inputX py-inputY border-1 border-monokaiBlue placeholder:text-monokaiOrange mt-inputLabel mb-formInput text-input"
          readOnly
        ></input>
        <button
          type="submit"
          className={clsx(
            "text-monokaiPink rounded h-button hover:text-buttonPinkHover active:text-buttonPinkActive text-button",
            { hidden: !id, block: id }
          )}
        >
          (x) Delete Endorsement
        </button>
      </div>
    </form>
  );
}
