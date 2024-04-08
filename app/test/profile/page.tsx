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
            router.push('/test/team')
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <main>
            <h1>Profile</h1>
            <div>
                {user && (
                    <>
                        <h1>{user.name}</h1>
                        <p>{user.email}</p>
                        <Image width={100} height={100} src={user.image} alt={user.name} />
                    </>
                )}
                <form onSubmit={handleSubmit}>
                    <label>
                        Github Profile:
                        <input type="text" value={githubProfile} onChange={(e) => setGithubProfile(e.target.value)} />
                    </label>
                    <label>
                        LinkedIn Profile:
                        <input type="text" value={linkedinProfile} onChange={(e) => setLinkedinProfile(e.target.value)} />
                    </label>
                    <label>
                        Other Profile:
                        <input type="text" value={otherProfile} onChange={(e) => setOtherProfile(e.target.value)} />
                    </label>
                    <label>
                        Projects:
                        <input type="text" value={projects} onChange={(e) => setProjects(e.target.value)} />
                    </label>
                    <label>
                        Bio:
                        <textarea value={bio} onChange={(e) => setBio(e.target.value)} />
                    </label>
                    <button type="submit">Complete Profile</button>
                </form>
            </div>
        </main>
    );
}