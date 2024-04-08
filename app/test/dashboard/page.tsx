'use client'

import { User, UserSession } from "@/types/user";
import { getSession } from "next-auth/react"
import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Team } from "@/types/team";
import Link from "next/link";
import { toast } from "react-toastify";
// import Image from "next/image";
export default function Dashboard() {

    const [sessionUser, setSessionUser] = useState<UserSession | null>(null)
    const [team, setTeam] = useState<Team | null>(null)
    const [profileSet, setProfileSet] = useState<boolean>(false)
    const [user, setUser] = useState<User | null>(null);
    const [ideaData, setIdeaData] = useState({
        ideaDescription: '',
        ideaLink: '',
        track: ''
    });


    useEffect(() => {
        const fetchSession = async () => {
            try {
                const session = await getSession();
                if (session && session.user && session.user.name && session.user.email && session.user.image) {
                    setSessionUser(session.user as UserSession)
                    const user = await axios.get('/api/user')
                    setUser(user.data.user)
                    if (user.data.user.githubProfile && user.data.user.projects && user.data.user.bio) {
                        setProfileSet(true)
                    }
                    const team = await axios.get('/api/team')
                    setTeam(team.data)
                } else {
                    setSessionUser(null)
                }
            } catch (error) {
                console.log(error)
            }
        }
        fetchSession()
    }, [])

    const handleIdeaDataChange = (e: any) => {
        e.preventDefault()
        setIdeaData({
            ...ideaData,
            [e.target.name]: e.target.value
        });
    };

    const handleFormSubmit = async (e: any) => {
        e.preventDefault();
        try {
            const response = await axios.patch('/api/team/idea', ideaData);
            toast.success(response.data.message);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <main className="bg-black min-h-screen text-white">
            {/* {sessionUser && <h1>Welcome {sessionUser.name}</h1>} */}
            <h2 className="w-full text-6xl font-ptMono text-center">Dashboard</h2>
            {/* {team && <h3>{team.teamName} and {team.teamCode}</h3>} */}
            <h2 className="w-full text-3xl font-ptMono">Profile</h2>
            {/* {user && <p>{user.linkedinProfile}</p>} */}
            {/* {profileSet.valueOf() && <Link href="/test/profile">Kindly complete your profile, it's important for selection</Link>} */}
            
            {true && (
                <div className="flex flex-col gap-[1rem] justify-center items-start w-full">
                    <p className="font-bold text-xl">Name: <span className="font-normal">Manas</span></p>
                    <p className="font-bold text-xl">Email: <span className="font-normal">manaslaud2004@gmail.com</span></p>
                    <p className="font-bold text-xl w-[75%]">About me: <span className="font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quibusdam molestiae aliquam totam corporis, suscipit numquam aperiam quidem dolore sapiente quas vitae. Praesentium excepturi omnis minima? Labore iusto deserunt natus.</span></p>
                    {/* user Github && */}
                    <div className="w-full flex flex-col gap-[1rem]">
                    <p className="font-bold text-xl w-[75%]">Github: <span className="font-normal">manaslaud</span></p>
                    </div>
                </div>
            )}
           <div className="flex flex-col gap-[1rem] justify-center items-center">
           <h2 className="w-full text-3xl font-ptMono">Idea Submission</h2>
           <form onSubmit={handleFormSubmit} className="w-full flex justify-center items-center gap-[2rem] ">
                <label className="flex flex-col gap-[1rem] justify-center items-center ">
                    Idea Description:
                    <input type="text" name="ideaDescription" value={ideaData.ideaDescription} onChange={handleIdeaDataChange} required   className="border-[2px] border-[#fafafa] bg-black text-gray-400 font-ptMono px-[1rem] rounded-lg py-[0.5rem] text-xl"
/>
                </label>
                <label className="flex flex-col gap-[1rem] justify-center items-center ">
                    Idea Link:
                    <input type="text" name="ideaLink" value={ideaData.ideaLink} onChange={handleIdeaDataChange} required   className="border-[2px] border-[#fafafa] bg-black text-gray-400 font-ptMono px-[1rem] rounded-lg py-[0.5rem] text-xl"
/>
                </label>
                <label className="flex flex-col gap-[1rem] justify-center items-center ">
                    Track:
                    <input type="text" name="track" value={ideaData.track} onChange={handleIdeaDataChange} required   className="border-[2px] border-[#fafafa] bg-black text-gray-400 font-ptMono px-[1rem] rounded-lg py-[0.5rem] text-xl"
 />
                </label>
            </form>
            <button type="submit" className="flex flex-row gap-4 justify-center items-center font-ptMono p-3 font-light  text-xl rounded-lg text-white bg-blue-500 border-b-4 border-transparent hover:scale-110 hover:border-b-4  hover:border-blue-700 transition-all duration-200 ease-in-out">Submit</button>

           </div>
        </main>
    )
}

