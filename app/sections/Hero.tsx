"use client"
import Image from "next/image"
import Navbar from "../components/Navbar"
import Test from "../components/AnimationHero"
import { useRef } from "react"
export default function Hero(){
  const rows=useRef<number[]>([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15])
    return (
       <main className="flex h-screen w-full flex-col justify-between items-center bg-hero-background bg-no-repeat bg-cover bg-black px-[1rem] py-[0.5rem] gap-[1rem] overflow-x-hidden relative">
      <Navbar/>
      <section className="flex  flex-col z-[2] w-fit justify-center items-center absolute top-[50%] translate-y-[-50%] ">
      <Image src='/hero/mainLogo.svg' alt="Logo" width={250} height={250}/>

      <div className="text-white text-[108px] font-medium text-center leading-[7rem] relative py-[2rem] px-[1rem]">
      <Image src='/hero/plus.svg' alt="Logo" width={30} height={30} className="absolute left-0 top-0"/>

        A week of Technical <br /> Innovation
      </div>
      <button className="bg-[#0281F0] text-white p-[1rem] text-xl font-ptMono rounded-[0.5rem] flex gap-[1rem] shadow-inner items-center">
        Register Now!
        <Image src='/hero/arrow.svg' alt="Logo" width={16} height={16}/>
      </button>

      </section>
      <section className="flex flex-col justify-between items-center w-full absolute bottom-0 bg-gradient-to-b from-[rgba(0,0,0,.1)] to-[rgba(0,0,0,1)]">
          {rows.current.map((val:number,index:number)=>{
            return (<Test rowNumber={val} key={index}/>)
          })}
        </section>
        </main>
    )
}