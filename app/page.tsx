import Hero from "./sections/Hero";
import Yantra from "./sections/Yantra";
import VIT from "./sections/VIT";
export default function Home() {
  return (
  <main className="w-full gap-[1rem] flex flex-col font-schabo bg-black">
     <Hero/> 
    <Yantra/>
    <VIT/>
  </main>
  );
}


