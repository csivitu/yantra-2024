import React from "react";
import TimelineComponent from "@/app/components/timeline";
import Navbar from "@/app/components/Navbar";
import Tracks from "@/app/sections/Tracks";
import AboutHack from "@/app/sections/AboutHack";
import FAQ from "@/app//sections/FAQ";
import MainHackHero from "@/app/sections/MainHackHero";
import PrizePool from "@/app/sections/Prizepool";
import Footer from "@/app/sections/Footer";

const page = () => {
  return (
    <main className="w-full gap-[4rem] flex flex-col py-[1rem] font-schabo bg-black">
      <MainHackHero />
      <AboutHack />
      {/* <Timeline /> */}
      {/* Try this with gridOption = 3 and gridOption = 4. 3 looks better imo */}
      <Tracks gridOption={4} />
      <TimelineComponent />
      <PrizePool />
      <FAQ />
      <Footer />
    </main>
  );
};

export default page;
