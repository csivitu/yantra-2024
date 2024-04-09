"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Link from "next/link";
export default function Form() {
  const router = useRouter();
  const [teamCode, setTeamCode] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.put("/api/team", {
        teamCode,
      });
      console.log(response.data);
      router.push("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <main className="font-ptMono bg-black min-h-screen w-full text-white p-8 flex flex-col items-center justify-center">
      <h1 className="text-6xl font-medium text-center">Join Team</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 mx-auto max-w-md mt-10"
      >
        <div className="p-8 bg-[#aeaeae50] rounded-lg flex flex-col gap-2">
          <input
            name="teamCode"
            className=" bg-black text-white border-0 px-6 py-4 rounded-lg"
            type="text"
            placeholder="Team Code"
            value={teamCode}
            onChange={(e) => setTeamCode(e.target.value)}
          />
          <button
            type="submit"
            className="bg-white text-black px-4 py-2 rounded-lg font-bold hover:bg-[#5cdb5c] transition-all duration-200 ease-linear"
          >
            Join Team
          </button>
        </div>
        <Link href="/dashboard" className="">
          <button className="w-full px-6 py-2 bg-[#2563eb] hover:bg-[#417bf8] rounded-md">
            &larr; Go to Dashboard
          </button>
        </Link>
      </form>
    </main>
  );
}
