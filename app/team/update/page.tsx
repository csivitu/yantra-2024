'use client';

import { FormEvent} from 'react';
import { useRouter } from 'next/navigation';

export default function Form() {
    const router = useRouter();
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        await fetch(`/api/team`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                description: formData.get('description'),
                gLink: formData.get('gLink'),
                fLink: formData.get('fLink'),
                //dLink: formData.get('dLink'),
                }),
        });

        router.push('/dashboard');
        router.refresh();
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-2 mx-auto max-w-md mt-10">
            <label htmlFor="teamName">Update Team Info</label>
            <label>Team Description</label>
            <input
                name="description"
                className="border border-black text-black"
                type="text"
            />
            <label>Github Link</label>
            <input
                name="gLink"
                className="border border-black text-black"
                type="text"
            />
            <label>Figma Link</label>
            <input
                name="fLink"
                className="border border-black text-black"
                type="text"
            />
            <button type="submit">Update</button>
        </form>
    );
}

