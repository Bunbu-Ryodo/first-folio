"use client"
import { deleteProject } from '@/app/lib/actions';
import { useFormState } from 'react-dom';
import clsx from 'clsx';

const initialState = { errors: {}, message: null }

export default function RemoveProject({id}: {id: number | undefined}){
    const [state, dispatch] = useFormState(deleteProject, initialState)
    return (
        <form action={dispatch}>
            <div className="items-center flex flex-col w-full px-2">
                <div className="flex flex-row w-2/3 justify-end">
                    <input type="number" name="id" value={id ? id : ''} className="hidden opacity-0 animate-fade-in w-full rounded-md text-monokaiYellow bg-transparent border-[1px] px-inputX py-inputY border-1 border-monokaiBlue placeholder:text-monokaiOrange mt-inputLabel mb-formInput text-input" readOnly></input>
                    <button type="submit" className={clsx('text-monokaiPink rounded h-button hover:text-buttonPinkHover active:text-buttonPinkActive text-button', { 'hidden': !id, 'block': id })}>(x) Delete Project</button>
                </div>
            </div>
        </form>
    )
}