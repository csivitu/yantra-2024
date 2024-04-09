'use client';

import Link from 'next/link'
import { getSession } from 'next-auth/react'
import React, { useEffect, useState } from 'react'
import { UserSession } from '@/types/user';
import axios from 'axios';
import { Team } from '@/types/team';
import { useRouter } from 'next/navigation';

export default function CreateTeam() {

    const router = useRouter()

    const [sessionUser, setSessionUser] = useState<UserSession | null>(null)
    const [team, setTeam] = useState<Team | null>(null)
    const [teamName, setTeamName] = useState('');
    const [description, setDescription] = useState('');
    const [teamCode, setTeamCode] = useState<string | null>(null);

    useEffect(() => {
        const fetchSession = async () => {
            try {
                const session = await getSession();
                if (session && session.user && session.user.name && session.user.email && session.user.image) {
                    setSessionUser(session.user as UserSession)
                    const response = await axios.get('/api/team')
                    console.log(response.data)
                    setTeam(response.data as Team)
                } else {
                    setSessionUser(null)
                }
            } catch (error) {
                console.log(error)
            }
        }
        fetchSession()
    }, [])

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const response = await axios.post('/api/team', { teamName, description });
            setTeamCode(response.data.code)
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    };
    return (
        <main  className='font-ptMono bg-black min-h-screen w-full text-white p-8'>
                    <h1 className='text-4xl font-medium'>Create Your Team</h1>
            <section className='mb-6 border-2 border-white p-4 rounded-xl mt-8'>
                <div>
                    <form onSubmit={handleSubmit} className='flex flex-col gap-2 mt-4'>
                        <label className='flex w-full flex-col md:flex-row md:w-[50vw] items-center'>
                            <p className='w-full md:w-[30%]'>Team Name:</p>
                            <input type="text" value={teamName} onChange={(e) => setTeamName(e.target.value)} className='rounded-lg p-1 w-full text-black'/>
                        </label>
                        <label className='flex w-full flex-col md:flex-row md:w-[50vw] items-center'>
                            <p className='w-full md:w-[30%]'>Description:</p>
                            <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} className='rounded-lg p-1 w-full text-black'/>
                        </label>
                        <button type="submit" className='bg-[#aeaeae] px-4 py-2 w-fit rounded-md'>Create Team</button>
                    </form>
                    <div className="flex gap-4 mt-4"><p className='text-xl font-medium'>Your Team Code: </p>
                    {teamCode && <p className='text-[#60b86b] font-bold text-xl'>{teamCode}</p>}</div>
                </div>

            </section>
            {/* <section>
                {sessionUser && (
                    <div>
                        {sessionUser.email}
                    </div>
                )}
            </section> */}
            <Link href = "/dashboard" className='bg-[#60b86b] px-6 py-2 rounded-lg'>
                Go to dashboard
            </Link>
        </main>
    )
}
