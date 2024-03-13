import React from "react";
import Footer from "../sections/Footer";
import Timeline from "../sections/Timeline";
import Navbar from "../components/Navbar";
import Tracks from "../sections/Tracks";
import AboutHack from "../sections/AboutHack";
import FAQ from "../sections/FAQ";

const page = () => {
  return (
    <main className="w-full gap-[4rem] flex flex-col py-[1rem] font-schabo bg-black">
      <Navbar />
      <AboutHack />
      <Timeline />
      {/* Try this with gridOption = 3 and gridOption = 4. 3 looks better imo */}
      <Tracks gridOption={4} />
      <FAQ />
      <Footer />
    </main>
  );
};

export default page;
