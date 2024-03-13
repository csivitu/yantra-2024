'use client';
import { FormEvent } from 'react';
import {useRouter} from 'next/navigation';

export default function Form() {
    const router = useRouter() 
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        await fetch(`/api/team/post`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
            teamName: formData.get('teamName'),
            description: formData.get('description'),
        }),
        });
    router.push('/dashboard')
    router.refresh()
    };
return (
        <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 mx-auto max-w-md mt-10"
        >
        <label htmlFor="teamName">Team Name</label>
        <input
        name="teamName"
        className="border border-black text-black"
        type="text"
        />
        <label>Team Description</label>
        <input
        name="description"
        className="border border-black  text-black"
        type="text"
        />
        <button type="submit">Create</button>
        </form>
       );
}
