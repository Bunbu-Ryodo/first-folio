"use client"
import Link from 'next/link';
import React, { useState, ChangeEvent, FormEvent } from 'react';

export default function LoginForm() {
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
                <div className="flex flex-col justify-center w-full text-monokaiYellow text-header font-medium text-center p-2 h-headerBanner mb-titleHeader"><span>Welcome</span></div>
                <form action="#" className="w-full">
                    <label className="text-monokaiPink text-informational">&lt;Email&gt;</label><br></br>
                    <input type="email" name="name" onChange={handleSetEmail} className="w-full rounded-md text-monokaiYellow bg-transparent border-[1px] px-inputX py-inputY border-1 border-monokaiBlue placeholder:text-monokaiOrange mt-inputLabel mb-formInput text-input"></input>
                    <label className="text-monokaiPink text-informational">&lt;Password&gt;</label><br></br>
                    <input type="password" name="name" onChange={handlePasswordChange} className="w-full rounded-md text-monokaiYellow bg-transparent border-[1px] px-inputX py-inputY border-1 border-monokaiBlue placeholder:text-monokaiOrange mt-inputLabel mb-informational text-input"></input>
                    <div className="w-full"><a href="#" className="text-monokaiPurple underline text-informational">Forgot Password?</a></div>
                    <div className="flex w-full justify-between mt-formInput">
                    <button type="submit" className="flex-1 bg-monokaiGreen text-button text-monokaiBlack rounded h-button hover:bg-buttonGreenHover active:bg-buttonGreenActive mr-[16px]">Login()</button>
                    <Link href="/register" className="flex-1 ml-[16px]"><button className="w-full bg-transparent border-2 border-monokaiGreen text-monokaiGreen rounded h-button hover:bg-gunMetalHover active:bg-gunMetalActive text-button">Register()</button></Link>
                    </div>
                </form>
            </div>
    )
  }