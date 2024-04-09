'use client'

import { useState, useEffect } from 'react';
import axios from 'axios';
import { getSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { User } from '@/types/user';
import { toast } from 'react-toastify';

export default function ProfilePage() {

    const router = useRouter();
    const [user, setUser] = useState<User>({} as User);
    const [githubProfile, setGithubProfile] = useState<string>('');
    const [linkedinProfile, setLinkedinProfile] = useState<string>('');
    const [projects, setProjects] = useState<string>('');
    const [bio, setBio] = useState<string>('');
    const [otherProfile, setOtherProfile] = useState<string>('');

    useEffect(() => {
        const fetchData = async () => {
            const session = await getSession();
            if (!session || !session.user) {
                router.push('/login')
            }
        }
        fetchData()
    }, [])

    useEffect(() => {
        async function fetchUser() {
            try {
                const response = await axios.get('/api/user');
                setUser(response.data.user);
                setGithubProfile(response.data.user.githubProfile);
                setLinkedinProfile(response.data.user.linkedinProfile);
                setProjects(response.data.user.projects);
                setBio(response.data.user.bio);
                setOtherProfile(response.data.user.otherProfile);

            } catch (e) {
                console.log(e)
            }
        }
        fetchUser();
    }, []);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const response = await axios.put('/api/user', {
                githubProfile,
                linkedinProfile,
                projects,
                bio,
                otherProfile
            });
            toast.success(response.data.message)
            router.push('/team')
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <main className='font-ptMono bg-black min-h-screen w-full text-white p-8'>
            <h1 className='text-4xl font-bold'>Profile</h1>
            <div className='border-2 border-white p-4 rounded-lg mt-4'>
                {user && (
                    <div className='flex flex-col md:flex-row gap-4 items-center'>
                        <Image width={100} height={100} src={user.image} alt={user.name} className='rounded-full'/>
                        <div className=""><h1 className='text-xl font-medium '>{user.name}</h1>
                        <p className='text-sm text-[#aeaeae]'>{user.email}</p></div>
                    </div>
                )}
                <form onSubmit={handleSubmit} className='mt-4 flex flex-col gap-4'>
                    <label className='flex w-full md:w-[60vw] flex-col md:flex-row'>
                        <div className="w-full md:w-[30%]">Github Profile:</div>
                        <input type="text" value={githubProfile} onChange={(e) => setGithubProfile(e.target.value)} className='rounded-lg p-1 text-black'/>
                    </label>
                    <label className='flex w-full md:w-[60vw] flex-col md:flex-row'>
                        <div className="w-full md:w-[30%]">LinkedIn Profile:</div>
                        <input type="text" value={linkedinProfile} onChange={(e) => setLinkedinProfile(e.target.value)} className='rounded-lg p-1 text-black'/>
                    </label>
                    <label className='flex w-full md:w-[60vw] flex-col md:flex-row'>
                        <div className="w-full md:w-[30%]">Other Profile:</div>
                        <input type="text" value={otherProfile} onChange={(e) => setOtherProfile(e.target.value)} className='rounded-lg p-1 text-black'/>
                    </label>
                    <label className='flex w-full md:w-[60vw] flex-col md:flex-row'>
                        <div className="w-full md:w-[30%]">Projects:</div>
                        <input type="text" value={projects} onChange={(e) => setProjects(e.target.value)} className='rounded-lg p-1 text-black'/>
                    </label>
                    <label className='flex w-full md:w-[60vw] flex-col md:flex-row'>
                        <div className="w-full md:w-[30%]">Bio:</div>
                        <textarea value={bio} onChange={(e) => setBio(e.target.value)} className='rounded-lg p-1 text-black'/>
                    </label>
                    <button type="submit" className='bg-[#aeaeae] px-4 py-2 rounded-lg mx-auto w-fit'>Complete Profile</button>
                </form>
            </div>
        </main>
    );
}