"use client";

import Link from "next/link";
import { getSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { UserSession } from "@/types/user";
import axios from "axios";
import { Team } from "@/types/team";

export default function TeamPage() {
  const [sessionUser, setSessionUser] = useState<UserSession | null>(null);
  const [team, setTeam] = useState<Team | null>(null);
  const [teamName, setTeamName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    const fetchSession = async () => {
      try {
        const session = await getSession();
        if (
          session &&
          session.user &&
          session.user.name &&
          session.user.email &&
          session.user.image
        ) {
          setSessionUser(session.user as UserSession);
          const response = await axios.get("/api/team");
          console.log(response.data);
          setTeam(response.data as Team);
        } else {
          setSessionUser(null);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchSession();
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await axios.post("/api/team", { teamName, description });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <main className="font-ptMono bg-black min-h-screen w-full text-white p-8">
      <h1 className="text-4xl font-bold">Team</h1>
      <hr />
      <section className="w-full flex ">
        {team?.id ? (
          <div className="w-full flex flex-col gap-2 items-center">
            <div className="w-fit p-8 border-2 border-white  rounded-lg mx-auto bg-[#aeaeae50] text-2xl mt-8">
              <p>Team: {team.teamName}</p>
              <p> Team Code: {team.teamCode} </p>
            </div>
            <Link
              href="/dashboard"
              className="px-6 py-2 mt-6 bg-[#42c342] hover:bg-[#4edb4e] rounded-md"
            >
              <button type="button">Go to Dashboard</button>
            </Link>
          </div>
        ) : (
          <div className="border-black border-2 w-full h-[80vh] flex items-center justify-center">
            <div className="w-full md:w-[60%] h-[40%] md:h-[60%] flex  flex-col md:flex-row justify-center gap-8">
              <Link
                href="/team/create"
                className="bg-blue-500 hover:bg-blue-600 w-full h-[40%] md:h-full flex justify-center py-4  rounded-md mb-4 items-center text-xl md:text-3xl font-bold border-4 border-transparent hover:border-white"
              >
                Create Team
              </Link>
              <Link
                href="/team/join"
                className="bg-blue-500 hover:bg-blue-600 w-full h-[40%] md:h-full flex justify-center py-4  rounded-md mb-4 items-center text-xl md:text-3xl font-bold border-4 border-transparent hover:border-white"
              >
                Join Team
              </Link>
            </div>
          </div>
        )}
      </section>
      {/* <section className="mr-2">
            {sessionUser && (
               <div>
                  Email: {sessionUser.email}
               </div>
            )}
         </section> */}
    </main>
  );
}
