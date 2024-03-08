import Hero from "./sections/Hero";
import Yantra from "./sections/Yantra";
import VIT from "./sections/VIT";
import Organisers from "./sections/Organisers";
import Patrons from "./sections/Patrons";
import Timeline from "./sections/Timeline";
import Footer from "./sections/Footer";
export default function Home() {
  return (
  <main className="w-full gap-[4rem] flex flex-col py-[1rem] font-schabo bg-black">
     <Hero/> 
    <Yantra/>
    <VIT/>
    <Timeline/>
    {/* <Organisers/> */}
    <Patrons/>
    <Footer/>
  </main>
  );
}


