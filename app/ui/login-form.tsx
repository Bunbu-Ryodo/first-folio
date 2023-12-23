"use client"
import Link from 'next/link';
import React, { useState, ChangeEvent, FormEvent } from 'react';
import clsx from 'clsx';
import { loginUser } from '@/app/lib/actions';
import { useFormState } from 'react-dom';
import { useFormStatus } from 'react-dom'
import SubmitButton from '@/app/ui/SubmitButton';

const initialState = {
    errors: {}, message: null
}

export default function LoginForm() {
    const { pending } = useFormStatus();
    const [state, dispatch] = useFormState(loginUser, initialState);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSetEmail = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value)
    }

    const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    return (
            <div className="flex flex-col md-w:1/3 max-[352px]">
                <div className="flex flex-col justify-center w-full text-monokaiYellow text-header font-medium text-center p-2 h-headerBanner mb-titleHeader"><span className="opacity-0 animate-fade-in-slower">Welcome</span></div>
                <form action={dispatch} className="w-full">
                    <label className="opacity-0 animate-fade-in-slowest text-monokaiPink text-informational">&lt;Email&gt;</label><br></br>
                    <input type="email" name="email" onChange={handleSetEmail} className="opacity-0 animate-fade-in w-full rounded-md text-monokaiYellow bg-transparent border-[1px] px-inputX py-inputY border-1 border-monokaiBlue placeholder:text-monokaiOrange mt-inputLabel mb-formInput text-input"></input>
                    <label className="opacity-0 animate-fade-in-slowest text-monokaiPink text-informational">&lt;Password&gt;</label><br></br>
                    <input type="password" name="password" onChange={handlePasswordChange} className="opacity-0 animate-fade-in w-full rounded-md text-monokaiYellow bg-transparent border-[1px] px-inputX py-inputY border-1 border-monokaiBlue placeholder:text-monokaiOrange mt-inputLabel mb-informational text-input"></input>
                    <div className="w-full"><a href="#" className="text-monokaiPurple underline text-informational">Forgot Password?</a></div>
                    <div className="flex w-full justify-between mt-formInput">
                    <SubmitButton label="Login()" ></SubmitButton>
                    <Link href="/register" className="flex-1 ml-[16px]"><button className="w-full bg-transparent border-2 border-monokaiGreen text-monokaiGreen rounded h-button hover:bg-gunMetalHover active:bg-gunMetalActive text-button">Register()</button></Link>
                    </div>
                </form>
            </div>
    )
  }