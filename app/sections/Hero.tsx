import Image from "next/image"
import Navbar from "../components/Navbar"
import AnimationHero from "../components/AnimationHero"
export default function Hero() {
  const rows = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,]
  return (
    <main id="hero" className="flex h-screen w-full flex-col justify-between items-center bg-hero-background bg-no-repeat bg-cover bg-black px-[1rem] py-[0.5rem] gap-[1rem] overflow-x-hidden relative mobile:bg-fixed">
      <Navbar />
      <section className="flex flex-col z-[2] w-fit justify-center items-center absolute top-[50%] translate-y-[-55%] ">
        <Image src='/hero/mainLogo.svg' alt="Logo" width={300} height={300} className="mobile:w-[45%]" />

        <div className="text-white laptop:text-[98px] mobile:text-[46px] font-medium text-center laptop:leading-[7rem] relative py-[1rem] px-[1rem]">
          <Image src='/hero/plus.svg' alt="Logo" width={20} height={20} className="absolute left-0 top-0" />

          A WEEK OF TECHNICAL <br /> INNOVATION
        </div>
        {/* <button className="bg-[#0281F0] text-white laptop:p-[1rem] mobile:p-[0.551rem] laptop:text-xl mobile:text-sm font-ptMono rounded-[0.5rem] flex gap-[1rem] shadow-inner items-center">
        Register Now
        <Image src='/hero/arrow.svg' alt="Logo" width={16} height={16}/>
      </button> */}

      </section>
      <section className="flex flex-col justify-between items-center w-full absolute bottom-0 bg-gradient-to-b from-[rgba(0,0,0,.1)] to-[rgba(0,0,0,1)]">
        {rows.map((val: number, index: number) => {
          return (<AnimationHero rowNumber={val} key={index} />)
        })}
      </section>
    </main>
  )
}