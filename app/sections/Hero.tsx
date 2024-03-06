import Image from "next/image"
import Navbar from "../components/Navbar"
export default function Hero(){
    return (
       <main className="flex h-screen w-full flex-col justify-between relative bg-hero-background bg-no-repeat bg-cover bg-black px-[1rem] py-[0.5rem] overflow-x-hidden">
      <Navbar/>
      <section className="flex flex-col w-full justify-center items-center absolute top-[50%] translate-y-[-50%] gap-[2rem]">
      <Image src='/hero/yantra.svg' alt="Logo" width={150} height={150}/>
      <div className="text-white text-[108px] font-medium text-center leading-[8rem]">
        A week of Technical <br /> Innovation
      </div>
      <button className="bg-[#0281F0] text-white p-[1rem] text-xl rounded-[0.5rem] flex gap-[1rem] shadow-inner items-center">
        Register Now!
        <Image src='/hero/arrow.svg' alt="Logo" width={16} height={16}/>
      </button>
      </section>
        </main>
    )
}