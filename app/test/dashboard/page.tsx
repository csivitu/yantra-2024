'use client'

import { getTeam } from "@/lib/call";
import { UserSession } from "@/types/user";
import { getSession } from "next-auth/react"
import { useEffect, useState } from "react";
import axios from 'axios';

export default function Dashboard() {

    const [sessionUser, setSessionUser] = useState<UserSession | null>(null)
    const [team, setTeam] = useState<any>(null)


    useEffect(() => {
        const fetchSession = async () => {
            try {
                const session = await getSession();
                if (session && session.user && session.user.name && session.user.email && session.user.image) {
                    setSessionUser(session.user as UserSession)
                    const team = await axios.get('/api/team')
                    setTeam(team)
                } else {
                    setSessionUser(null)
                }
            } catch (error) {
                console.log(error)
            }
        }
        fetchSession()
    }, [])

    return (
        <div>
            {sessionUser && <h1>Welcome {sessionUser.name}</h1>}
        </div>
    )
}

