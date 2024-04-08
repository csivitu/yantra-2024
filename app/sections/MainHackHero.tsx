'use client'

import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { getSession, signIn } from "next-auth/react"; // Import the signIn function from NextAuth for authentication.
import Animation from "./AnimationMainHAckHero";
type MainHackHeroProps = {};

const MainHackHero: React.FC<MainHackHeroProps> = () => {

  const [signedIn, setSignedIn] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      const session = await getSession();
      if (session) {
        setSignedIn(true);
      }
    }
    fetchData()
  }, [])

  const callbackUrl = "https://yantra.vit.ac.in/profile";

  return (
    <div className="flex flex-col justify-center py-[0.5rem] items-center gap-[1.5rem] px-[3rem]  w-full font-schabo relative overflow-hidden">
      <Animation/>
      <Navbar />
      <div className="flex flex-col w-full items-center ">
      
        <div className="flex flex-col justify-center items-center z-[10] w-fit">
          <div className="flex flex-row bg-gradient-to-t from-[#3a9bdce9] via-[#1d90d298] to-[#59b4e85b] p-2 px-[1rem] font-aeonik rounded-full justify-center items-center">
            <div className="w-[10px] h-[10px] rounded-full mx-4 bg-[#8af3ffb0] shadow-xl shadow-cyan-400 "></div>
            <p className="text-white font-light mobile:sm laptop:text-normal text-center">
              A sustainable Development Hackathon
            </p>
            <div className="w-[10px] h-[10px] rounded-full mx-4 bg-[#8af3ffb0] shadow-xl shadow-cyan-400 "></div>
          </div>

          <div className=" laptop:mt-10 flex justify-center items-center">
            <Image
              alt="SDG"
              width={400}
              height={400}
              src={"/icons/Brands/YLogo.svg"}
              className="mobile:aspect-square mobile:w-[50%] laptop:w-full"
            />
          </div>
          <div>
            {!signedIn ? (
              <button onClick={() =>
                signIn("google", { callbackUrl })
              } className="flex flex-row gap-4 justify-center items-center font-ptMono laptop:px-3 mobile:px-2 mobile:py-1 laptop:py-2 font-light m-3 text-xl rounded-lg text-white bg-blue-400 border-b-4 border-transparent hover:scale-110 hover:border-b-4  hover:border-blue-700 transition-all duration-110 ease-in-out">
                Register now
              </button>
            ) : (
              <Link href = "/dashboard" className="flex flex-row gap-4 justify-center items-center font-ptMono p-3 font-light m-3 text-2xl rounded-lg text-white bg-blue-400 border-b-4 border-transparent hover:scale-110 hover:border-b-4  hover:border-blue-700 transition-all duration-110 ease-in-out">
                Go to dashboard
              </Link>
            )
            }
          </div>
        </div>
        <div className="bg-[#090909] z-[10] w-full flex mobile:flex-wrap laptop:flex-row justify-between items-center mobile:py-[1rem] gap-6 laptop:py-4 laptop:px-[6rem] mobile:px-[1rem]">
          <div>
            <Image
              alt="SDG"
              width={75}
              height={75}
              src={"/icons/Brands/SDGIcon.svg"}
            />
          </div>
          <div>
            <Image
              alt="SDG"
              width={110}
              height={110}
              src={"/icons/Brands/IICIcon.svg"}
            />
          </div>
          <div>
            <Image
              alt="SDG"
              width={110}
              height={110}
              src={"/icons/Brands/YantraIcon.svg"}
            />
          </div>
          <div>
            <Image
              alt="SDG"
              width={110}
              height={110}
              src={"/icons/Brands/G20Icon.svg"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default MainHackHero;