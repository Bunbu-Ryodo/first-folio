"use client"
import React, { useState } from 'react';
import SubmitButton from '@/app/ui/SubmitButton'
import Link from 'next/link';

const initialState = {
    errors: {}, message: null
}
//Initial Images may be the culprit if TypeScript throws an error on loading the projects

export default function ProjectForm({initialTitle, initialRepo, initialUrl, initialDescription, initialImages}: 
    {initialTitle: string | undefined, initialRepo: string | undefined, initialUrl: string | undefined, initialDescription: string | undefined, initialImages: string | undefined}){

    const [title, setTitle] = useState(initialTitle);
    const [repo, setRepo] = useState(initialRepo);
    const [url, setUrl] = useState(initialUrl);
    const [description, setDescription] = useState(initialDescription);
    const [images, setImages] = useState(initialImages);

    return (
        <form>
            <div className="flex flex-col w-full items-center">
                <div className="flex flex-row w-2/3 flex-wrap border-b-[1px] border-monokaiBlue">
                    <div className="items-center flex flex-col w-full md:w-1/2 md:items-end px-2">
                        <div className="w-full md:w-3/4 min-w-[320px]">
                            <label className="opacity-0 animate-fade-in-slowest text-monokaiPink text-informational">&lt;Project Title&gt;</label><br></br>
                            <input type="text" name="title" onChange={(e) => setTitle(e.target.value)} className="opacity-0 animate-fade-in w-full rounded-md text-monokaiYellow bg-transparent border-[1px] px-inputX py-inputY border-1 border-monokaiBlue placeholder:text-monokaiOrange mt-inputLabel mb-formInput text-input"></input>
                        </div>
                        <div className="w-full md:w-3/4 min-w-[320px]">
                            <label className="opacity-0 animate-fade-in-slowest text-monokaiPink text-informational">&lt;Github Repo&gt;</label><br></br>
                            <input type="text" name="repo" onChange={(e) => setRepo(e.target.value)} className="opacity-0 animate-fade-in w-full rounded-md text-monokaiYellow bg-transparent border-[1px] px-inputX py-inputY border-1 border-monokaiBlue placeholder:text-monokaiOrange mt-inputLabel mb-formInput text-input"></input>
                        </div>
                        <div className="w-full md:w-3/4 min-w-[320px]">
                            <label className="opacity-0 animate-fade-in-slowest text-monokaiPink text-informational">&lt;URL&gt;</label><br></br>
                            <input type="text" name="url" onChange={(e) => setUrl(e.target.value)} className="opacity-0 animate-fade-in w-full rounded-md text-monokaiYellow bg-transparent border-[1px] px-inputX py-inputY border-1 border-monokaiBlue placeholder:text-monokaiOrange mt-inputLabel mb-formInput text-input"></input>
                        </div>
                    </div>
                    <div className="items-center flex flex-col md:items-start w-full md:w-1/2">
                        <div className="w-full md:w-3/4 min-w-[320px]">
                            <label className="opacity-0 animate-fade-in-slowest text-monokaiPink text-informational">&lt;Describe Your Project&gt;</label><br></br>
                            <textarea name="description" onChange={(e) => setDescription(e.target.value)} className="h-projectTextarea opacity-0 animate-fade-in w-full rounded-md text-monokaiYellow bg-transparent border-[1px] px-inputX py-inputY border-1 border-monokaiBlue placeholder:text-monokaiOrange mt-inputLabel mb-formInput text-input"></textarea>
                        </div>
                    </div>
                    <div className="items-center flex flex-col w-full md:w-1/2 md:items-end px-2">
                            <input type="file" name="images" onChange={(e) => setImages(e.target.value)} accept="image/jpg, image/png" className="file:cursor-pointer cursor-pointer w-full md:w-3/4 min-w-[320px] opacity-0 animate-fade-in rounded-md text-monokaiYellow bg-transparent border-[1px] px-inputX py-inputY border-1 border-monokaiBlue placeholder:text-monokaiOrange mt-inputLabel mb-formInput text-input
                                file:mr-4 file:py-2 file:px-4
                                file:rounded-full file:border-0
                                file:text-sm file:font-semibold
                                file:bg-gunMetal file:text-monokaiPink
                                hover:file:gunMetalHover
                            "></input>
                            <input type="file" name="images" accept="image/jpg, image/png" className="file:cursor-pointer cursor-pointer w-full md:w-3/4 min-w-[320px] opacity-0 animate-fade-in rounded-md text-monokaiYellow bg-transparent border-[1px] px-inputX py-inputY border-1 border-monokaiBlue placeholder:text-monokaiOrange mt-inputLabel mb-formInput text-input
                                file:mr-4 file:py-2 file:px-4
                                file:rounded-full file:border-0
                                file:text-sm file:font-semibold
                                file:bg-gunMetal file:text-monokaiPink
                                hover:file:bg-gunMetalHover
                            "></input>
                    </div>
                    <div className="items-center flex flex-col md:items-start w-full md:w-1/2">
                            <input type="file" name="images" accept="image/jpg, image/png" className="file:cursor-pointer cursor-pointer w-full md:w-3/4 min-w-[320px] opacity-0 animate-fade-in rounded-md text-monokaiYellow bg-transparent border-[1px] px-inputX py-inputY border-1 border-monokaiBlue placeholder:text-monokaiOrange mt-inputLabel mb-formInput text-input
                                file:mr-4 file:py-2 file:px-4
                                file:rounded-full file:border-0
                                file:text-sm file:font-semibold
                                file:bg-gunMetal file:text-monokaiPink
                                hover:file:bg-gunMetalHover
                            "></input>
                            <input type="file" name="images" accept="image/jpg, image/png" className="file:cursor-pointer cursor-pointer w-full md:w-3/4 min-w-[320px] opacity-0 animate-fade-in rounded-md text-monokaiYellow bg-transparent border-[1px] px-inputX py-inputY border-1 border-monokaiBlue placeholder:text-monokaiOrange mt-inputLabel mb-formInput text-input
                                file:mr-4 file:py-2 file:px-4
                                file:rounded-full file:border-0
                                file:text-sm file:font-semibold
                                file:bg-gunMetal file:text-monokaiPink
                                hover:file:bg-gunMetalHover
                            "></input>
                    </div>
                    <div className="items-center flex flex-col md:items-end w-full md:w-1/2 px-2 mb-formInput">
                        <div className="w-full md:w-3/4 min-w-[320px]">
                            <SubmitButton label="Save()"></SubmitButton>
                        </div>
                    </div>
                    <div className="items-center flex flex-col md:items-start w-full md:w-1/2 px-2 mb-formInput">
                        <button className="w-full md:w-3/4 min-w-[320px] bg-monokaiPink text-monokaiBlack rounded h-button hover:bg-buttonPinkHover active:bg-buttonPinkActive text-button">Delete()</button>
                    </div>
                </div>
            </div>
        </form>
    )
}