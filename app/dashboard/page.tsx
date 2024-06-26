"use client";

import { User, UserSession } from "@/types/user";
import { getSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Team } from "@/types/team";
import Link from "next/link";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
// import Image from "next/image";
export default function Dashboard() {

  const router = useRouter()
  const [sessionUser, setSessionUser] = useState<UserSession | null>(null);
  const [team, setTeam] = useState<Team | null>(null);
  const [profileSet, setProfileSet] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);
  const [ideaData, setIdeaData] = useState({
    ideaDescription: "",
    ideaLink: "",
    track: "",
  });

  useEffect(() => {
    const fetchSession = async () => {
      const session = await getSession();
      if (
        session &&
        session.user &&
        session.user.name &&
        session.user.email &&
        session.user.image
      ) {
        setSessionUser(session.user as UserSession);
        const user = await axios.get("/api/user");
        setUser(user.data.user);
        if (
          user.data.user.githubProfile &&
          user.data.user.projects &&
          user.data.user.bio
        ) {
          setProfileSet(true);
        }else{
          
        }
        try {
          const team = await axios.get("/api/team");
          setTeam(team.data);
        } catch (error: any) {
          // toast.error("You are not part of any team")
          // router.push("/team")
        }
      } else {
        setSessionUser(null);
      }

    };
    fetchSession();
  }, []);

  const handleIdeaDataChange = (e: any) => {
    e.preventDefault();
    setIdeaData({
      ...ideaData,
      [e.target.name]: e.target.value,
    });
  };

  const handleTeamDelete = async () => {
    try {
      const response = await axios.delete("/api/team");
      toast.success(response.data.message);
      router.push("/")
    } catch (error: any) {
      toast.error(error.response.data.message);
      console.error(error);
    }
  }

  const handleFormSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.patch("/api/team/idea", ideaData);
      toast.success(response.data.message);
    } catch (error: any) {
      toast.error(error.response.data.message)
      console.error(error);
    }
  };


  return (
    <main className="font-ptMono bg-black min-h-screen h-fit w-full text-white p-8">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <h1 className="text-4xl font-bold">Dashboard</h1>
        <button className="flex flex-row gap-4 justify-center items-center font-ptMono px-6 py-2 w-fit font-light  text-xl rounded-lg text-white bg-red-500 border-b-4 border-transparent hover:scale-110 hover:border-b-4  hover:border-red-700 transition-all duration-200 ease-in-out"
          onClick={handleTeamDelete} >Leave team</button>
          <Link className="flex flex-row gap-4 justify-center items-center font-ptMono px-6 py-2 w-fit font-light  text-xl rounded-lg text-white bg-blue-500 border-b-4 border-transparent hover:scale-110 hover:border-b-4  hover:border-blue-700 transition-all duration-200 ease-in-out"
          href="/idea" >Submit idea</Link>
      </div>
      <hr />
      <section className="flex flex-col md:flex-row py-6 md:h-[90vh] gap-2">
        {/* <div className="flex flex-col gap-[1rem] items-center border-2 p-6 rounded-lg">
          <h2 className="w-full text-2xl mt-4 md:text-3xl font-ptMono text-center">
            Idea Submission
          </h2>
          <form
            onSubmit={handleFormSubmit}
            className="w-full flex flex-col justify-center items-center gap-[2rem] "
          >
            <label className="flex flex-col gap-2gap-[1rem] justify-center items-center ">
              Idea Description:
              <input
                type="text"
                name="ideaDescription"
                value={ideaData.ideaDescription}
                onChange={handleIdeaDataChange}
                required
                className="border-[2px] border-[#aeaeae70] bg-[#aeaeae50] text-gray-400 font-ptMono px-[1rem] rounded-lg py-1 md:py-[0.5rem] text-xl"
              />
            </label>
            <label className="flex flex-col gap-2gap-[1rem] justify-center items-center ">
              Idea Link:
              <input
                type="text"
                name="ideaLink"
                value={ideaData.ideaLink}
                onChange={handleIdeaDataChange}
                required
                className="border-[2px] border-[#aeaeae70] bg-[#aeaeae50] text-gray-400 font-ptMono px-[1rem] rounded-lg py-1 md:py-[0.5rem] text-xl"
              />
            </label>
            <label className="flex flex-col gap-2gap-[1rem] justify-center items-center ">
              Track:
              <select
                name="track"
                value={ideaData.track}
                onChange={handleIdeaDataChange}
                required
                className="border-[2px] border-[#aeaeae70] bg-[#aeaeae50] text-gray-400 font-ptMono px-[1rem] rounded-lg py-1 md:py-[0.5rem] text-xl"
              >
                <option value="QUALITY EDUCATION">QUALITY EDUCATION</option>
                <option value="REDUCED INEQUALITIES">REDUCED INEQUALITIES</option>
                <option value="PARTNERSHIP FOR GOALS">PARTNERSHIP FOR GOALS</option>
                <option value="GENDER EQUALITY">GENDER EQUALITY</option>
                <option value="SUSTAINABLE CITIES COMMUNITIES">SUSTAINABLE CITIES COMMUNITIES</option>
                <option value="DECENT WORK AND ECONOMIC GROWTH">DECENT WORK AND ECONOMIC GROWTH</option>
              </select>
            </label>
            <button
              type="submit"
              className="flex flex-row gap-4 justify-center items-center font-ptMono px-6 py-2 w-full font-light  text-xl rounded-lg text-white bg-blue-500 border-b-4 border-transparent hover:scale-110 hover:border-b-4  hover:border-blue-700 transition-all duration-200 ease-in-out"
            >
              Submit
            </button>
          </form>
        </div> */}
        <div className="w-full flex flex-col gap-2">
          <section className="flex flex-col justify-center items-center w-full mx-auto border-2 border-white rounded-lg p-4  order-1">
            <h2 className="w-full text-3xl font-ptMono mb-6">Profile</h2>
            {/* {user && <p>{user.linkedinProfile}</p>} */}
            {/* {profileSet.valueOf() && <Link href="/test/profile">Kindly complete your profile, it's important for selection</Link>} */}

            {user && (
              <div className="flex flex-col gap-2 md:gap-[1rem] justify-center items-start w-full">
                <p className="font-bold text-sm md:text-xl">
                  Name: <span className="font-normal">{user.name}</span>
                </p>
                <p className="font-bold text-sm md:text-xl">
                  Email: <span className="font-normal">{user.email}</span>
                </p>
                <p className="font-bold text-sm md:text-xl w-[75%]">
                  About me: <span className="font-normal">{user.bio}</span>
                </p>
                {/* user Github && */}
                <div className="w-full flex flex-col gap-[1rem]">
                  <p className="font-bold text-sm md:text-xl     w-[75%]">
                    Github:{" "}
                    <span className="font-normal">{user.githubProfile}</span>
                  </p>
                </div>
              </div>
            )}
            {/* <section className = "flex flex-col ">
                {team && (
                    <div>
                        {team.members.map((member, index) => () => {}
                    </div>
                )

                }
            </section> */}
          </section>
          <section className="flex flex-col justify-center items-center w-full mx-auto border-2 border-white rounded-lg p-4">
            <h2 className="w-full text-3xl font-ptMono mb-6">Team Details</h2>
            {/* {user && <p>{user.linkedinProfile}</p>} */}
            {/* {profileSet.valueOf() && <Link href="/test/profile">Kindly complete your profile, it's important for selection</Link>} */}

            {team && (
              <div className="flex flex-col gap-2 md:gap-[1rem] justify-center items-start w-full">
                <p className="font-bold text-lg md:text-xl">
                  Team Name:{" "}
                  <span className="font-normal">{team.teamName}</span>
                </p>
                <p className="font-bold text-lg md:text-xl">
                  Team Code:{" "}
                  <span className="font-normal">{team.teamCode}</span>
                </p>

                <div className="w-full flex flex-col gap-1">
                  <p className="font-bold text-xl w-[75%]">
                    Github:{" "}
                    <span className="font-normal">
                      {team.users.map((user) => (
                        <p>{user.name}</p>
                      ))}
                    </span>
                  </p>
                </div>
              </div>
            )}
            {/* <section className = "flex flex-col ">
                {team && (
                    <div>
                        {team.members.map((member, index) => () => {}
                    </div>
                )

                }
            </section> */}
          </section>
        </div>
      </section>
      {/* {sessionUser && <h1>Welcome {sessionUser.name}</h1>} */}

      {/* {team && <h3>{team.teamName} and {team.teamCode}</h3>} */}
    </main>
  );
}
