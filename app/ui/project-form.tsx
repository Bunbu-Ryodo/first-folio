"use client"
import React, { useState } from 'react';
import SubmitButton from '@/app/ui/SubmitButton'
import Link from 'next/link';

const initialState = {
    errors: {}, message: null
}

export default function ProjectForm(){
    return (
        <div className="flex flex-col w-full items-center">
            <div className="flex flex-row w-2/3 flex-wrap">
                <div className="items-center flex flex-col w-full md:w-1/2 md:items-end px-2">
                    <div className="w-full md:w-3/4 min-w-[320px]">
                        <label className="opacity-0 animate-fade-in-slowest text-monokaiPink text-informational">&lt;Project Title&gt;</label><br></br>
                        <input type="text" name="title" className="opacity-0 animate-fade-in w-full rounded-md text-monokaiYellow bg-transparent border-[1px] px-inputX py-inputY border-1 border-monokaiBlue placeholder:text-monokaiOrange mt-inputLabel mb-formInput text-input"></input>
                    </div>
                    <div className="w-full md:w-3/4 min-w-[320px]">
                        <label className="opacity-0 animate-fade-in-slowest text-monokaiPink text-informational">&lt;Github Repo&gt;</label><br></br>
                        <input type="text" name="repo" className="opacity-0 animate-fade-in w-full rounded-md text-monokaiYellow bg-transparent border-[1px] px-inputX py-inputY border-1 border-monokaiBlue placeholder:text-monokaiOrange mt-inputLabel mb-formInput text-input"></input>
                    </div>
                    <div className="w-full md:w-3/4 min-w-[320px]">
                        <label className="opacity-0 animate-fade-in-slowest text-monokaiPink text-informational">&lt;URL&gt;</label><br></br>
                        <input type="text" name="url" className="opacity-0 animate-fade-in w-full rounded-md text-monokaiYellow bg-transparent border-[1px] px-inputX py-inputY border-1 border-monokaiBlue placeholder:text-monokaiOrange mt-inputLabel mb-formInput text-input"></input>
                    </div>
                </div>
                <div className="items-center flex flex-col md:items-start w-full md:w-1/2">
                    <div className="w-full md:w-3/4 min-w-[320px]">
                        <label className="opacity-0 animate-fade-in-slowest text-monokaiPink text-informational">&lt;Describe Your Project&gt;</label><br></br>
                        <textarea name="description" className="h-projectTextarea opacity-0 animate-fade-in w-full rounded-md text-monokaiYellow bg-transparent border-[1px] px-inputX py-inputY border-1 border-monokaiBlue placeholder:text-monokaiOrange mt-inputLabel mb-formInput text-input"></textarea>
                    </div>
                </div>
                <div className="items-center flex flex-col w-full md:w-1/2 md:items-end px-2">
                        <input type="file" name="images" accept="image/jpg, image/png" className="w-full md:w-3/4 min-w-[320px] opacity-0 animate-fade-in rounded-md text-monokaiYellow bg-transparent border-[1px] px-inputX py-inputY border-1 border-monokaiBlue placeholder:text-monokaiOrange mt-inputLabel mb-formInput text-input
                            file:mr-4 file:py-2 file:px-4
                            file:rounded-full file:border-0
                            file:text-sm file:font-semibold
                            file:bg-violet-50 file:text-violet-700
                            hover:file:bg-violet-100
                        "></input>
                        <input type="file" name="images" accept="image/jpg, image/png" className="w-full md:w-3/4 min-w-[320px] opacity-0 animate-fade-in rounded-md text-monokaiYellow bg-transparent border-[1px] px-inputX py-inputY border-1 border-monokaiBlue placeholder:text-monokaiOrange mt-inputLabel mb-formInput text-input
                            file:mr-4 file:py-2 file:px-4
                            file:rounded-full file:border-0
                            file:text-sm file:font-semibold
                            file:bg-violet-50 file:text-violet-700
                            hover:file:bg-violet-100
                        "></input>
                </div>
                <div className="items-center flex flex-col md:items-start w-full md:w-1/2">
                        <input type="file" name="images" accept="image/jpg, image/png" className="w-full md:w-3/4 min-w-[320px] opacity-0 animate-fade-in rounded-md text-monokaiYellow bg-transparent border-[1px] px-inputX py-inputY border-1 border-monokaiBlue placeholder:text-monokaiOrange mt-inputLabel mb-formInput text-input
                            file:mr-4 file:py-2 file:px-4
                            file:rounded-full file:border-0
                            file:text-sm file:font-semibold
                            file:bg-violet-50 file:text-violet-700
                            hover:file:bg-violet-100
                        "></input>
                         <input type="file" name="images" accept="image/jpg, image/png" className="w-full md:w-3/4 min-w-[320px] opacity-0 animate-fade-in rounded-md text-monokaiYellow bg-transparent border-[1px] px-inputX py-inputY border-1 border-monokaiBlue placeholder:text-monokaiOrange mt-inputLabel mb-formInput text-input
                            file:mr-4 file:py-2 file:px-4
                            file:rounded-full file:border-0
                            file:text-sm file:font-semibold
                            file:bg-violet-50 file:text-violet-700
                            hover:file:bg-violet-100
                        "></input>
                </div>




                {/* <div className="flex w-full flex-wrap justify-between">
                    <div className="items-center flex flex-col w-full md:w-1/2 md:items-end">
                        <div className="w-full md:w-3/4">
                            <input type="file" name="images" accept="image/jpg, image/png" className="opacity-0 animate-fade-in rounded-md text-monokaiYellow bg-transparent border-[1px] px-inputX py-inputY border-1 border-monokaiBlue placeholder:text-monokaiOrange mt-inputLabel mb-formInput text-input
                            file:mr-4 file:py-2 file:px-4
                            file:rounded-full file:border-0
                            file:text-sm file:font-semibold
                            file:bg-violet-50 file:text-violet-700
                            hover:file:bg-violet-100
                            "></input>
                        </div>
                        <div className="w-full md:w-3/4">
                            <input type="file" name="images" accept="image/jpg, image/png" className="opacity-0 animate-fade-in rounded-md text-monokaiYellow bg-transparent border-[1px] px-inputX py-inputY border-1 border-monokaiBlue placeholder:text-monokaiOrange mt-inputLabel mb-formInput text-input
                            file:mr-4 file:py-2 file:px-4
                            file:rounded-full file:border-0
                            file:text-sm file:font-semibold
                            file:bg-violet-50 file:text-violet-700
                            hover:file:bg-violet-100
                            "></input>
                        </div>
                    </div>
                    <div className="items-center flex flex-col w-full md:w-1/2 md:items-start">
                        <div className="w-full md:w-3/4">
                            <input type="file" name="images" accept="image/jpg, image/png" className="opacity-0 animate-fade-in rounded-md text-monokaiYellow bg-transparent border-[1px] px-inputX py-inputY border-1 border-monokaiBlue placeholder:text-monokaiOrange mt-inputLabel mb-formInput text-input
                            file:mr-4 file:py-2 file:px-4
                            file:rounded-full file:border-0
                            file:text-sm file:font-semibold
                            file:bg-violet-50 file:text-violet-700
                            hover:file:bg-violet-100
                            "></input>
                        </div>
                        <div className="w-full md:w-3/4">
                            <input type="file" name="images" accept="image/jpg, image/png" className="opacity-0 animate-fade-in rounded-md text-monokaiYellow bg-transparent border-[1px] px-inputX py-inputY border-1 border-monokaiBlue placeholder:text-monokaiOrange mt-inputLabel mb-formInput text-input
                            file:mr-4 file:py-2 file:px-4
                            file:rounded-full file:border-0
                            file:text-sm file:font-semibold
                            file:bg-violet-50 file:text-violet-700
                            hover:file:bg-violet-100
                            "></input>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}