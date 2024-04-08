'use client'

import { User, UserSession } from "@/types/user";
import { getSession } from "next-auth/react"
import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Team } from "@/types/team";
import Link from "next/link";
import { toast } from "react-toastify";

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
        <main>
            {sessionUser && <h1>Welcome {sessionUser.name}</h1>}
            <h2>Team</h2>
            {team && <h3>{team.teamName} and {team.teamCode}</h3>}
            <h2>Profile</h2>
            {user && <p>{user.linkedinProfile}</p>}
            {profileSet.valueOf() && <Link href="/test/profile">Kindly complete your profile, it's important for selection</Link>}
            <h2>Idea Data</h2>
            <form onSubmit={handleFormSubmit}>
                <label>
                    Idea Description:
                    <input type="text" name="ideaDescription" value={ideaData.ideaDescription} onChange={handleIdeaDataChange} required />
                </label>
                <label>
                    Idea Link:
                    <input type="text" name="ideaLink" value={ideaData.ideaLink} onChange={handleIdeaDataChange} required />
                </label>
                <label>
                    Track:
                    <input type="text" name="track" value={ideaData.track} onChange={handleIdeaDataChange} required />
                </label>
                <button type="submit">Submit</button>
            </form>
        </main>
    )
}

