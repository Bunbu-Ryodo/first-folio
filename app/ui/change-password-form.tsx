"use client"
import SubmitButton from '@/app/ui/SubmitButton';
import { changePassword } from '@/app/lib/actions';
import { useFormState } from 'react-dom';

const initialState = {
    errors: {}, message: ""
}

export default function ChangePasswordForm(){
    const [state, dispatch] = useFormState(changePassword, initialState);
    return(
        <div className="flex flex-col items-center w-full mt-[24px] mr-[16px] md:w-1/2">
        <div className="flex flex-col justify-center w-full text-monokaiYellow text-displayMobile md:text-header font-medium text-center p-2 h-headerBanner mb-titleHeader"><span className="opacity-0 animate-fade-in-slower">Change Your Password</span></div>
        <form action={dispatch}>
            <label className="opacity-0 animate-fade-in-slowest text-monokaiPink text-informational">&lt;Enter Current Password&gt;</label><br></br>
            <input type="password" name="currentPassword" className="opacity-0 animate-fade-in w-full rounded-md text-monokaiYellow bg-transparent border-[1px] px-inputX py-inputY border-1 border-monokaiBlue placeholder:text-monokaiOrange mt-inputLabel mb-formInput text-input"></input>
            <label className="opacity-0 animate-fade-in-slowest text-monokaiPink text-informational">&lt;Set a New Password&gt;</label><br></br>
            <input type="password" name="newPassword" className="opacity-0 animate-fade-in w-full rounded-md text-monokaiYellow bg-transparent border-[1px] px-inputX py-inputY border-1 border-monokaiBlue placeholder:text-monokaiOrange mt-inputLabel mb-formInput text-input"></input>
            <label className="opacity-0 animate-fade-in-slowest text-monokaiPink text-informational">&lt;Confirm New Password&gt;</label><br></br>
            <input type="password" name="confirmPassword" className="opacity-0 animate-fade-in w-full rounded-md text-monokaiYellow bg-transparent border-[1px] px-inputX py-inputY border-1 border-monokaiBlue placeholder:text-monokaiOrange mt-inputLabel mb-formInput text-input"></input>
            {state?.errors && state.errors?.confirmPassword && state.errors.confirmPassword.map((error: string) => (
                <div key={error} className="opacity-0 animate-fade-in mt-2 mb-2 text-monokaiPurple">
                    {error}
                </div>
            ))}
            <SubmitButton label="Reset Password"></SubmitButton>
            {state?.message && 
                <div key={state.message} className="opacity-0 animate-fade-in mt-2 mb-2 text-monokaiPurple">
                    {state.message}
                </div>
            }
        </form>
    </div>
    )
}