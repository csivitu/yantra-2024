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
        <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-2 mx-auto max-w-md mt-10"
        >
            <input
                name="teamCode"
                className="border border-black  text-black"
                type="text"
                placeholder="Team Code"
                value={teamCode}
                onChange={(e) => setTeamCode(e.target.value)}
            />
            <button type="submit">Join Team</button>
        </form>
    );
}
