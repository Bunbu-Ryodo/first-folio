"use client"
import React, { useState, ChangeEvent } from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import { useDebouncedCallback } from 'use-debounce';
import { createUser } from '@/app/lib/actions';
import { useFormState } from 'react-dom';
import { useFormStatus } from 'react-dom'
import SubmitButton from '@/app/ui/SubmitButton';

const initialState = {
    errors: {}, message: null
}

export default function SignUpForm() {
    const [state, dispatch] = useFormState(createUser, initialState);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordsMatch, setPasswordsMatch] = useState(true);


    const handleSetEmail = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value)
    }

    const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
        checkPasswordsMatch();
    };

    const handleConfirmPasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
        setConfirmPassword(event.target.value)
        checkPasswordsMatch();
    }; 

    const checkPasswordsMatch = useDebouncedCallback(() => {
        if(password && confirmPassword){
            if(password !== confirmPassword)
            {
                setPasswordsMatch(false);
            }
            else
            {
                setPasswordsMatch(true);
            }
        }
    }, 300); 

    return (
            <div className="flex flex-col md:w-1/2 lg:w-1/3">
                <div className="flex flex-col justify-center w-full text-monokaiYellow text-header font-medium text-center p-2 h-headerBanner mb-titleHeader"><span className="opacity-0 animate-fade-in-slower">Register</span></div>
                <form action={dispatch} className="w-full">
                    <label className="opacity-0 animate-fade-in-slowest text-monokaiPink text-informational">&lt;Email&gt;</label>
                    <input type="email" name="email" onChange={handleSetEmail} className={clsx('opacity-0 animate-fade-in w-full rounded-md text-monokaiYellow bg-transparent border-[1px] px-inputX py-inputY border-1 placeholder:text-monokaiOrange mt-inputLabel mb-formInput text-input', {'border-red-500': state?.errors.email, 'border-monokaiBlue': !(state?.errors.email)})}></input>
                    {state?.errors && state.errors?.email && state.errors.email.map((error: string) => (
                        <div key={error} className="opacity-0 animate-fade-in mt-2 mb-2 text-monokaiPurple">
                        {error}
                        </div>
                    ))}
                    <label className="opacity-0 animate-fade-in-slowest text-monokaiPink text-informational">&lt;Create a Password&gt;</label>
                    <input type="password" name="password" onChange={handlePasswordChange} className={clsx('opacity-0 animate-fade-in w-full rounded-md text-monokaiYellow bg-transparent border-[1px] px-inputX py-inputY border-1 placeholder:text-monokaiOrange mt-inputLabel mb-informational text-input', { 'border-red-500': state?.errors.password, 'border-monokaiBlue': !(state?.errors.password) })}></input>
                    {state?.errors && state.errors?.password && state.errors.password.map((error: string) => (
                        <div key={error} className="opacity-0 animate-fade-in mt-2 mb-2 text-monokaiPurple">
                            {error}
                        </div>
                    ))}
                    <label className="opacity-0 animate-fade-in-slowest text-monokaiPink text-informational">&lt;Confirm Password&gt;</label>
                    <input type="password" name="confirmPassword" onChange={handleConfirmPasswordChange} className={clsx('opacity-0 animate-fade-in w-full rounded-md text-monokaiYellow bg-transparent border-[1px] px-inputX py-inputY border-1 placeholder:text-monokaiOrange mt-inputLabel mb-informational text-input', { 'border-red-500': !passwordsMatch, 'border-monokaiBlue': passwordsMatch })}></input>
                    {state?.errors && state.errors?.confirmPassword && state.errors.confirmPassword.map((error: string) => (
                        <div key={error} className="opacity-0 animate-fade-in mt-2 mb-2 text-informational text-monokaiPurple">
                            {error}
                        </div>
                    ))}
                    <div className="flex w-full justify-between mt-formInput">
                    <SubmitButton label="Register()" ></SubmitButton>
                    <Link href="/login" className="flex-1 ml-[16px]"><button className="w-full bg-transparent border-2 border-monokaiGreen text-monokaiGreen rounded h-button hover:bg-gunMetalHover active:bg-gunMetalActive text-button">Back To Login()</button></Link>
                    </div>
                </form>
            </div>
    )
  }
