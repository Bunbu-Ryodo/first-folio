import { useFormStatus } from 'react-dom';

export default function SubmitButton({ label }: { label: string }){
    const { pending } = useFormStatus();

    return(
        <button type="submit" disabled={pending} className="flex-1  bg-monokaiGreen text-button text-monokaiBlack rounded h-button hover:bg-buttonGreenHover active:bg-buttonGreenActive mr-[16px] disabled:bg-slate-500 w-full" aria-disabled={pending}>
            { pending ? 'Loading...' : label }
        </button>
    )

}