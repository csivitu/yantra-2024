'use client'
import { FormEvent } from 'react';
import {useRouter} from 'next/navigation';

export default function Form() {
    const router = useRouter() 
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const response = await fetch(`/api/team/join`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
            teamName: formData.get('teamName'),
            description: formData.get('teamCode'),
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
        <input
        name="teamName"
        className="border border-black text-black"
        type="text"
        />
        <input
        name="teamCode"
        className="border border-black  text-black"
        type="text"
        />
        <button type="submit">Create</button>
        </form>
       );
}
