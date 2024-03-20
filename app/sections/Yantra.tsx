import Marquee from "react-fast-marquee";

export default function Yantra() {
  return (
    <main id="yantra" className="w-full flex justify-around items-start laptop:min-h-[80vh] laptop:flex-row mobile:flex-col mobile:px-[1rem]">
      <section className="flex flex-col laptop:w-[45%] gap-[12px] h-full mobile:w-full">
        <div className="font-ptMono text-white text-5xl border-[1px] border-[#292929] rounded-[20px] px-[28px] py-[28px] text-center " id="about">
          WHAT IS YANTRA?
        </div>
        <div className="font-ptMono text-white text-5xl border-[1px] border-[#292929] rounded-[20px] px-[28px] py-[28px] text-center h-auto">
          {`       `}
        </div>
        <div className="border-[1px] border-[#292929] rounded-[20px]">
          <div className="bg-imgYantra bg-no-repeat bg-cover bg-center border-[1px] border-[#292929] rounded-[20px] h-[600px]  mix-blend-hard-light"></div>
        </div>
      </section>
      <section className="flex flex-col justify-between laptop:w-[52%] gap-[12px] laptop:min-h-full mobile:w-full mobile:gap-[1rem]">
        <div className="relative laptop:text-[305px] text-white border-[1px] border-[#292929] rounded-[20px] font-schabo whitespace-nowrap leading-none flex mobile:text-[100px] mobile:text-center overflow-hidden">
          <Marquee speed={150} className="w-fit laptop:mt-[30px] mobile:mt-[25px] z-200 px-[0.6rem] relative z-10">T ANNUAL TECH FES</Marquee>
          <div className="absolute inset-0 bg-gradient-radial from-[#B6C2FF] to-[#00051D] z-20 mix-blend-multiply"></div>
        </div>
        <div className="font-ptMono text-white text-2xl border-[1px] border-[#292929] rounded-[20px] px-[28px] py-[28px] leading-9 ">
          Yantra, VIT's annual tech fest, celebrates innovation with hackathons, coding challenges, workshops, and talks. It promotes sustainable goals, urging students to tackle real-world issues. The fest fosters a tech community for collaboration and skill showcases, emphasizing creativity and problem-solving. Yantra is a highly anticipated event inspiring students to drive positive change.
        </div>
        <div className="font-ptMono text-white text-5xl border-[1px] border-[#292929] rounded-[20px] px-[28px] py-[28px] text-center">
          {`       `}
        </div>
      </section>
    </main>
  );
}
