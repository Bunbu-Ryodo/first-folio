"use client"
import React, { useState } from 'react';
import SubmitButton from '@/app/ui/SubmitButton'
import Link from 'next/link';
import { saveProject } from '@/app/lib/actions';
import RemoveProject from '@/app/ui/remove-project';
import { useFormState } from 'react-dom';

const initialState = {
    errors: {}, message: null
}
//Initial Images may be the culprit if TypeScript throws an error on loading the projects

export default function ProjectForm({id, initialTitle, initialRepo, initialUrl, initialDescription}: 
    {
        id: number | undefined,
        initialTitle: string | undefined, 
        initialRepo: string | undefined, 
        initialUrl: string | undefined, 
        initialDescription: string | undefined, 
    }
    ){
    const [state, dispatch] = useFormState(saveProject, initialState);
    const [title, setTitle] = useState(initialTitle);
    const [repo, setRepo] = useState(initialRepo);
    const [url, setUrl] = useState(initialUrl);
    const [description, setDescription] = useState(initialDescription);
    const [images, setImages] = useState<(File | undefined)[]>([]);

    return (
        <form action={dispatch}>
            <div className="flex flex-col w-full items-center">
                <div className="flex flex-row w-2/3 flex-wrap border-b-[1px] border-monokaiBlue">
                    <div className="items-center flex flex-col w-full md:w-1/2 md:items-end px-2">
                        <div className="w-full md:w-3/4 min-w-[320px]">
                            <label className="opacity-0 animate-fade-in-slowest text-monokaiPink text-informational">&lt;Project Title&gt;</label><br></br>
                            <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} className="opacity-0 animate-fade-in w-full rounded-md text-monokaiYellow bg-transparent border-[1px] px-inputX py-inputY border-1 border-monokaiBlue placeholder:text-monokaiOrange mt-inputLabel mb-formInput text-input"></input>
                        </div>
                        <div className="w-full md:w-3/4 min-w-[320px]">
                            <label className="opacity-0 animate-fade-in-slowest text-monokaiPink text-informational">&lt;Github Repo&gt;</label><br></br>
                            <input type="text" name="repo" value={repo} onChange={(e) => setRepo(e.target.value)} className="opacity-0 animate-fade-in w-full rounded-md text-monokaiYellow bg-transparent border-[1px] px-inputX py-inputY border-1 border-monokaiBlue placeholder:text-monokaiOrange mt-inputLabel mb-formInput text-input"></input>
                        </div>
                        <div className="w-full md:w-3/4 min-w-[320px]">
                            <label className="opacity-0 animate-fade-in-slowest text-monokaiPink text-informational">&lt;URL&gt;</label><br></br>
                            <input type="text" name="url" value={url} onChange={(e) => setUrl(e.target.value)} className="opacity-0 animate-fade-in w-full rounded-md text-monokaiYellow bg-transparent border-[1px] px-inputX py-inputY border-1 border-monokaiBlue placeholder:text-monokaiOrange mt-inputLabel mb-formInput text-input"></input>
                        </div>
                    </div>
                    <div className="items-center flex flex-col md:items-start w-full md:w-1/2">
                        <div className="w-full md:w-3/4 min-w-[320px]">
                            <label className="opacity-0 animate-fade-in-slowest text-monokaiPink text-informational">&lt;Describe Your Project&gt;</label><br></br>
                            <textarea name="description" value={description} onChange={(e) => setDescription(e.target.value)} className="h-projectTextarea opacity-0 animate-fade-in w-full rounded-md text-monokaiYellow bg-transparent border-[1px] px-inputX py-inputY border-1 border-monokaiBlue placeholder:text-monokaiOrange mt-inputLabel mb-formInput text-input"></textarea>
                        </div>
                    </div>
                    <div className="items-center flex flex-col w-full md:w-1/2 md:items-end px-2">
                            <input type="file" name="images" 
                                onChange={(e) => {
                                if (e.target.files && e.target.files.length > 0) {
                                    const newImages = images ? [...images] : [];
                                    newImages[0] = e.target.files[0]; 
                                    console.log(newImages)
                                    setImages(newImages);
                                }
                            }} accept="image/jpg, image/png" className="file:cursor-pointer cursor-pointer w-full md:w-3/4 min-w-[320px] opacity-0 animate-fade-in rounded-md text-monokaiYellow bg-transparent border-[1px] px-inputX py-inputY border-1 border-monokaiBlue placeholder:text-monokaiOrange mt-inputLabel mb-formInput text-input
                                file:mr-4 file:py-2 file:px-4
                                file:rounded-full file:border-0
                                file:text-sm file:font-semibold
                                file:bg-gunMetal file:text-monokaiPink
                                hover:file:gunMetalHover
                            "></input>
                            <input type="file" name="images" 
                                onChange={(e) => {
                                    if (e.target.files && e.target.files.length > 0) {
                                        const newImages = images ? [...images] : [];
                                        newImages[1] = e.target.files[1]; 
                                        console.log(newImages)
                                        setImages(newImages);
                                    }
                                }}
                                accept="image/jpg, image/png" className="file:cursor-pointer cursor-pointer w-full md:w-3/4 min-w-[320px] opacity-0 animate-fade-in rounded-md text-monokaiYellow bg-transparent border-[1px] px-inputX py-inputY border-1 border-monokaiBlue placeholder:text-monokaiOrange mt-inputLabel mb-formInput text-input
                                file:mr-4 file:py-2 file:px-4
                                file:rounded-full file:border-0
                                file:text-sm file:font-semibold
                                file:bg-gunMetal file:text-monokaiPink
                                hover:file:bg-gunMetalHover
                            "></input>
                    </div>
                    <div className="items-center flex flex-col md:items-start w-full md:w-1/2">
                            <input type="file" name="images" onChange={(e) => {
                                    if (e.target.files && e.target.files.length > 0) {
                                        const newImages = images ? [...images] : [];
                                        newImages[2] = e.target.files[2]; 
                                        console.log(newImages)
                                        setImages(newImages);
                                    }
                                }}
                            accept="image/jpg, image/png" className="file:cursor-pointer cursor-pointer w-full md:w-3/4 min-w-[320px] opacity-0 animate-fade-in rounded-md text-monokaiYellow bg-transparent border-[1px] px-inputX py-inputY border-1 border-monokaiBlue placeholder:text-monokaiOrange mt-inputLabel mb-formInput text-input
                                file:mr-4 file:py-2 file:px-4
                                file:rounded-full file:border-0
                                file:text-sm file:font-semibold
                                file:bg-gunMetal file:text-monokaiPink
                                hover:file:bg-gunMetalHover
                            "></input>
                            <input type="file" name="images" onChange={(e) => {
                                    if (e.target.files && e.target.files.length > 0) {
                                        const newImages = images ? [...images] : [];
                                        newImages[3] = e.target.files[3]; 
                                        console.log(newImages)
                                        setImages(newImages);
                                    }
                                }}
                            accept="image/jpg, image/png" className="file:cursor-pointer cursor-pointer w-full md:w-3/4 min-w-[320px] opacity-0 animate-fade-in rounded-md text-monokaiYellow bg-transparent border-[1px] px-inputX py-inputY border-1 border-monokaiBlue placeholder:text-monokaiOrange mt-inputLabel mb-formInput text-input
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
                    <div className="items-center hidden md:items-end w-full px-2">
                        <input type="number" name="id" value={id ? id : ''} className="hidden opacity-0 animate-fade-in w-full rounded-md text-monokaiYellow bg-transparent border-[1px] px-inputX py-inputY border-1 border-monokaiBlue placeholder:text-monokaiOrange mt-inputLabel mb-formInput text-input" readOnly></input>
                    </div>
                </div>
                {state?.message && 
                <div key={state.message} className="opacity-0 animate-fade-in mt-2 mb-2 text-monokaiPurple">
                    {state.message}
                </div>
                }
            </div>
        </form>
    )
}