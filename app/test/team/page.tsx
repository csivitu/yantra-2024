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
      <main>
         <section>
            {team ? (
               <div>
                  <h1>Team</h1>
                  {team.teamName} {team.teamCode}
               </div>
            ) : (
               <div>
                  <Link href = "/test/team/create">
                     Create team
                  </Link>
                  <Link href = "/test/team/create">
                     Join team
                  </Link>
               </div>
            )}
         </section>
         <section>
            {sessionUser && (
               <div>
                  {sessionUser.email}
               </div>
            )}
         </section>
      </main>
   )
}
