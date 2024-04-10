"use client";

import Link from "next/link";
import { getSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { UserSession } from "@/types/user";
import axios from "axios";
import { Team } from "@/types/team";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function CreateTeam() {
  const router = useRouter();

  const [sessionUser, setSessionUser] = useState<UserSession | null>(null);
  const [team, setTeam] = useState<Team | null>(null);
  const [teamName, setTeamName] = useState("");
  const [teamCode, setTeamCode] = useState<string | null>(null);
  const [teamMade, setTeamMade] = useState<boolean>(false);

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
          setTeam(response.data as Team);
          setTeamMade(true)
        } else {
          setSessionUser(null);
        }
      } catch (error: any) {
        toast.error(error?.response?.data?.message)
      }
    };
    fetchSession();
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      if (teamName === "") {
        toast.error("Please enter a team name");
        return;
      }
      const response = await axios.post("/api/team", { teamName });
      setTeamCode(response.data.code);
      toast.success(response.data.message);
      setTeamMade(true)
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  };
  return (
    <main className="font-ptMono bg-black min-h-screen w-full text-white p-8">
      <h1 className="text-4xl font-medium">Create Your Team</h1>
      <hr />
      <section className="mb-6 border-2 border-white p-4 rounded-xl mt-8 w-full md:w-[40vw] mx-auto">
        <div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-2 mt-4">
            <label className="flex flex-col w-full items-center">
              <p className="text-3xl mb-2">Team Name:</p>
              <input
                type="text"
                value={teamName}
                onChange={(e) => setTeamName(e.target.value)}
                placeholder="Enter Team Name"
                className="rounded-lg px-4 py-2 bg-[#aeaeae50] text-white w-full"
              />
            </label>

            {!teamCode && (
              <button
                type="submit"
                className="px-6 py-2 mt-6 bg-[#42c342] hover:bg-[#4edb4e] rounded-md"
              >
                Generate Code
              </button>
            )}
          </form>
          {teamCode && (
            <div className="flex gap-4 mt-4 w-full bg-[#aeaeae50] p-4 rounded-md">
              {teamCode && (
                <p className="text-xl font-medium">Your Team Code: </p>
              )}
              {teamCode && (
                <p className="text-[#60b86b] font-bold text-xl">{teamCode}</p>
              )}
            </div>
          )}
        </div>
      </section>
      <div className="mx-auto w-full md:w-[40vw]">
        {teamMade ? (
          <Link href="/dashboard" className="">
            <button className="w-full px-6 py-2 bg-[#2563eb] hover:bg-[#417bf8] rounded-md">
              &larr; Go to Dashboard
            </button>
          </Link>
        ) : (
          <Link href="/profile" className="w-full px-6 py-2 bg-[#2563eb] hover:bg-[#417bf8] rounded-md">
            Go to profile
          </Link>
        )}

      </div>
      {/* <section>
                {sessionUser && (
                    <div>
                        {sessionUser.email}
                    </div>
                )}
            </section> */}
    </main>
  );
}
