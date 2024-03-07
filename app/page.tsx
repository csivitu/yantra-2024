import Hero from "./sections/Hero";
import Yantra from "./sections/Yantra";
import VIT from "./sections/VIT";
import Organisers from "./sections/Organisers";
import Patrons from "./sections/Patrons";
export default function Home() {
  return (
  <main className="w-full gap-[1rem] flex flex-col font-schabo bg-black">
     <Hero/> 
    <Yantra/>
    <VIT/>
    <Organisers/>
    <Patrons/>
  </main>
  );
}


