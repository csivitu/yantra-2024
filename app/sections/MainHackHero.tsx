'use client'

import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { getSession, signIn } from "next-auth/react"; // Import the signIn function from NextAuth for authentication.

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

  const callbackUrl = "/profile";

  return (
    <div className="flex flex-col justify-center items-center gap-[1.5rem] px-[3rem] bg-herohack-background w-full font-schabo">
      <Navbar />
      <div className="flex flex-col w-full">
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-row bg-gradient-to-t from-[#3a9bdce9] via-[#1d90d298] to-[#59b4e85b] p-2 px-[1rem] font-aeonik rounded-full justify-center items-center">
            <div className="w-[10px] h-[10px] rounded-full mx-4 bg-[#8af3ffb0] shadow-xl shadow-cyan-500 "></div>
            <p className="text-white font-light mobile:sm laptop:text-normal text-center">
              A sustainable Development Hackathon
            </p>
            <div className="w-[10px] h-[10px] rounded-full mx-4 bg-[#8af3ffb0] shadow-xl shadow-cyan-500 "></div>
          </div>

          <div className=" laptop:mt-10">
            <Image
              alt="SDG"
              width={500}
              height={500}
              src={"/icons/Brands/YLogo.svg"}
            />
          </div>
          <div>
            {!signedIn ? (
              <button onClick={() =>
                signIn("google", { callbackUrl })
              } className="flex flex-row gap-4 justify-center items-center font-ptMono p-3 font-light m-3 text-2xl rounded-lg text-white bg-blue-500 border-b-4 border-transparent hover:scale-110 hover:border-b-4  hover:border-blue-700 transition-all duration-200 ease-in-out">
                Register now
              </button>
            ) : (
              <Link href = "/dashboard" className="flex flex-row gap-4 justify-center items-center font-ptMono p-3 font-light m-3 text-2xl rounded-lg text-white bg-blue-500 border-b-4 border-transparent hover:scale-110 hover:border-b-4  hover:border-blue-700 transition-all duration-200 ease-in-out">
                Go to dashboard
              </Link>
            )
            }
          </div>
        </div>
        <div className="bg-[#090909] w-full flex mobile:flex-col laptop:flex-row justify-between items-center mobile:py-[1rem] gap-6 laptop:py-4 px-[6rem]">
          <div>
            <Image
              alt="SDG"
              width={125}
              height={125}
              src={"/icons/Brands/SDGIcon.svg"}
            />
          </div>
          <div>
            <Image
              alt="SDG"
              width={200}
              height={200}
              src={"/icons/Brands/IICIcon.svg"}
            />
          </div>
          <div>
            <Image
              alt="SDG"
              width={200}
              height={200}
              src={"/icons/Brands/YantraIcon.svg"}
            />
          </div>
          <div>
            <Image
              alt="SDG"
              width={200}
              height={200}
              src={"/icons/Brands/G20Icon.svg"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default MainHackHero;
