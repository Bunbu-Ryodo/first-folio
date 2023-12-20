"use client"
import React, { useState, ChangeEvent } from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import { useDebouncedCallback } from 'use-debounce';
import { createUser } from '@/app/lib/actions';
import { useFormState } from 'react-dom';


const initialState = {
    errors: {}, message: ""
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
                console.log("Passwords don't match");
            }
            else
            {
                setPasswordsMatch(true);
                console.log("Passwords do match");
            }
        }
    }, 300); 

    return (
            <div className="flex flex-col md-w:1/3">
                <div className="flex flex-col justify-center w-full text-monokaiYellow text-header font-medium text-center p-2 h-headerBanner mb-titleHeader"><span>Register</span></div>
                <form action={dispatch} className="w-full">
                    <label className="text-monokaiPink text-informational">&lt;Email&gt;</label><br></br>
                    <input type="email" name="email" onChange={handleSetEmail} className="w-full rounded-md text-monokaiYellow bg-transparent border-[1px] px-inputX py-inputY border-1 border-monokaiBlue placeholder:text-monokaiOrange mt-inputLabel mb-formInput text-input"></input>
                    <label className="text-monokaiPink text-informational">&lt;Create a Password&gt;</label><br></br>
                    <input type="password" name="password" onChange={handlePasswordChange} className="w-full rounded-md text-monokaiYellow bg-transparent border-[1px] px-inputX py-inputY border-1 border-monokaiBlue placeholder:text-monokaiOrange mt-inputLabel mb-informational text-input"></input>
                    <div className="w-full text-monokaiPurple mb-informational">At least 8 characters or numbers + special characters</div>
                    <label className="text-monokaiPink text-informational">&lt;Confirm Password&gt;</label><br></br>
                    <input type="password" name="confirmPassword" onChange={handleConfirmPasswordChange} className={clsx('w-full rounded-md text-monokaiYellow bg-transparent border-[1px] px-inputX py-inputY border-1 placeholder:text-monokaiOrange mt-inputLabel mb-informational text-input', { 'border-indianRed': !passwordsMatch, 'border-monokaiBlue': passwordsMatch })}></input>
                    {!passwordsMatch && <div className="text-indianRed mt-2">Passwords do not match.</div>}
                    <div className="flex w-full justify-between mt-formInput">
                    <button type="submit" className="flex-1 bg-monokaiGreen text-button text-monokaiBlack rounded h-button hover:bg-buttonGreenHover active:bg-buttonGreenActive mr-[16px]">Register()</button>
                    <Link href="/login" className="flex-1 ml-[16px]"><button className="w-full bg-transparent border-2 border-monokaiGreen text-monokaiGreen rounded h-button hover:bg-gunMetalHover active:bg-gunMetalActive text-button">Back To Login()</button></Link>
                    </div>
                </form>
            </div>
    )
  }
