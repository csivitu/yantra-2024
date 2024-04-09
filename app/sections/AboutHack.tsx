"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

type AboutHackProps = {};

const AboutHack: React.FC<AboutHackProps> = () => {
  // Forgive me Tailwind for I have sinned

  return (
    <div className="flex flex-col justify-center items-center gap-[1.5rem] px-[2rem] w-full" id="about">
      <div className="text-center tab:text-left leading-none font-ptMono text-[#eaeaea] mobile:text-4xl laptop:text-6xl border border-[#292929] w-full pb-4 pt-3 tab:pl-6 rounded-[20px]">
        ABOUT HACKATHON
      </div>

      <div className="w-full laptop:h-[45vh] flex mobile:flex-col laptop:flex-row">
        <div className="flex justify-center items-center w-full laptop:w-[25%] h-full border border-[#292929] laptop:mx-10 my-10 mobile:py-10 rounded-[180px]">
          <Image
            alt="SDG"
            width={200}
            height={200}
            src={"/icons/Brands/SDG.svg"}
            className="object-cover"
          />
        </div>
        <div className="mobile:hidden laptop:block laptop:w-[5%] h-full border border-[#292929] rounded-[80px] my-10 laptop:mr-10"></div>
        <div className="mobile:w-full laptop:w-[60%] h-full border border-[#292929] rounded-[60px] laptop:my-10 mr-10 text-white font-aeonik flex flex-col p-[2rem] font-normal justify-center">
          <h2 className="font-extrabold mobile:text-sm laptop:text-2xl">
            WHAT IS YANTRA ?
          </h2>
          <p className=" font-normal mobile:text-sm laptop:text-xl py-4 text-white/70">
          Yantra, VIT&apos;s prestigious student-led Technical
                        festival, is presented by the Office of Student Welfare.
                        It provides a unique opportunity for students to
                        explore, learn, and flourish. With engaging talks,
                        immersive workshops, and exhilarating hackathons, Yantra
                        equips participants with the skills and resources to
                        transform ideas into reality. It&apos;s a platform for
                        personal growth and creative innovation. Join us for
                        VIT&apos;s biggest student conference, where visionaries
                        and professionals from diverse fields share expertise
                        and experiences. Mark your calendars for an
                        unforgettable experience at Yantra, the epitome of
                        technical brilliance and personal development.
          </p>
        </div>
      </div>
      <div className="w-full laptop:h-[35vh] flex mobile:flex-col laptop:flex-row laptop:mt-10">
        <div className="mobile:w-full laptop:w-[60%] h-full border border-[#292929] rounded-[60px] my-10 laptop:ml-10 text-white font-aeonik flex flex-col p-[2rem] justify-center ">
        <h2 className="font-extrabold mobile:text-sm laptop:text-2xl">
            WHAT IS SDG ?
          </h2>
          <p className="font-normal mobile:text-sm laptop:text-xl py-4 text-white/70">
            The United Nations' 17{" "}
            <span className="underline">
              Sustainable Development Goals (SDGs)
            </span>{" "}
            include economic, social, and environmental topics to prioritize
            until 2030. Following the Millennium Development Goals primarily
            aimed at developing countries, the SDGs were introduced in 2016 to
            both include more broad topics and address all nations.
          </p>
        </div>
        <div className="mobile:hidden laptop:block laptop:w-[5%] h-full border border-[#292929] rounded-[80px] my-10 ml-10"></div>
        <div className="mobile:w-full laptop:w-[25%] flex justify-center items-center h-full border border-[#292929] laptop:mx-10 my-10 mobile:py-10 rounded-[180px]">
          <Image
            alt="SDG"
            width={200}
            height={200}
            src={"/icons/Brands/SDG.svg"}
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};
export default AboutHack;
