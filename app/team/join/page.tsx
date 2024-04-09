'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

export default function Form() {
    const router = useRouter()
    const [teamCode, setTeamCode] = useState<string>("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await axios.put('/api/team', {
                teamCode
            })
            console.log(response.data)
            router.push('/dashboard')
        } catch (error) {
            console.log(error)
        }
    };
    return (
        <main className='font-ptMono bg-black min-h-screen w-full text-white p-8 flex flex-col items-center justify-center'>
            <h1 className='text-6xl font-medium text-center'>Join Team</h1>
            <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 mx-auto max-w-md mt-10"
    >
        <input
            name="teamCode"
            className="border border-black  text-black px-4 py-2 rounded-lg"
            type="text"
            placeholder="Team Code"
            value={teamCode}
            onChange={(e) => setTeamCode(e.target.value)}
        />
        <button type="submit" className='bg-white text-black px-4 py-2 rounded-lg font-bold hover:bg-[#aeaeae] transition-all duration-200 ease-linear'>Join Team</button>
    </form></main>
        
    );
}
