'use client';

import Link from 'next/link'
import { getSession } from 'next-auth/react'
import React, { useEffect, useState } from 'react'
import { UserSession } from '@/types/user';
import axios from 'axios';
import { Team } from '@/types/team';

export default function TeamPage() {

   const [sessionUser, setSessionUser] = useState<UserSession | null>(null)
   const [team, setTeam] = useState<Team | null>(null)
   const [teamName, setTeamName] = useState('');
   const [description, setDescription] = useState('');

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
         console.log(response)
      } catch (error) {
         console.log(error)
      }
   };
   return (
      <main className = "bg-black h-screen text-white flex flex-col  md:flex-row justify-center items-center">
         <h1 className = "absolute top-[0%] left-[50%] translate-x-[-50%] font-mono text-6xl">Team</h1>
        
         <section>
            {team ? (
               <div>
                  <h1>Team</h1>
                  {team.teamName} {team.teamCode}
               </div>
            ) : (
               <div className = "border-black border-2 w-[50%]  h-[30%]">
                 <div className = "bg-blue-500 w-fit px-8 flex justify-center py-4  rounded-md mb-4   ">
                  <Link href = "/team/create">
                     Create Team
                  </Link>

                 </div>

                  
                 <div className = "bg-blue-500 px-10 py-4 w-fit flex justify-center rounded-md">
                  <Link href = "/team/create">
                     Join Team
                  </Link>

                 </div>

                 
               </div>
            )}
         </section>
         <section className = "mr-2">
            {sessionUser && (
               <div>
                  {sessionUser.email}
               </div>
            )}
         </section>
      </main>
   )
}
