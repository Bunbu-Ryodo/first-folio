import { useFormStatus } from "react-dom";
import clsx from "clsx";

export default function SubmitButton({
  label,
  noFlex1,
}: {
  label: string;
  noFlex1: boolean | undefined;
}) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className={clsx(
        "bg-monokaiGreen text-button text-monokaiBlack rounded h-button hover:bg-buttonGreenHover active:bg-buttonGreenActive mr-[16px] disabled:bg-slate-500 w-full",
        {
          "flex-1": !noFlex1 || noFlex1 === undefined,
        }
      )}
      aria-disabled={pending}
    >
      {pending ? "Loading..." : label}
    </button>
  );
}
