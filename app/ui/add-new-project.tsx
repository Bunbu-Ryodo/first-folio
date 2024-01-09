"use client"
import React, { useState } from 'react';
import SubmitButton from '@/app/ui/SubmitButton';
import { addNewProject } from '@/app/lib/actions';
import { useFormState } from 'react-dom';

const initialState = { errors: {}, message: null }
export default async function AddProject(){
    const [state, dispatch] = useFormState(addNewProject, initialState)
    return (
        <form action={dispatch}>
        <div className="flex justify-center w-full mt-formInput mb-formInput">
        <div className="flex w-2/3 justify-center">
            <SubmitButton label="AddNewProject++"></SubmitButton>
        </div>
        </div>
        </form>
    )

}