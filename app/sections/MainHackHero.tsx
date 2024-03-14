import React from "react";
import Navbar from "../components/Navbar";
import Image from "next/image";

type MainHackHeroProps = {};

const MainHackHero: React.FC<MainHackHeroProps> = () => {
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
            <button>Know More</button>
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
