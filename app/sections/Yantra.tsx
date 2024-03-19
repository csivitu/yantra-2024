export default function Yantra() {
  return (
    <main id = "yantra" className="w-full flex justify-around items-start laptop:min-h-[80vh] laptop:flex-row mobile:flex-col mobile:px-[1rem]">
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
        <div className=" laptop:text-[325px] laptop:h-[290px] text-transparent bg-clip-text border-[1px] border-[#292929] rounded-[20px]  bg-gradient-radial from-[#B6C2FF] to-[#00051D] font-schabo  whitespace-nowrap   justify-between items-center leading-none flex mobile:text-[100px] mobile:text-center  ">
          <p className="w-fit laptop:mt-[70px] mobile:mt-[25px] marquee px-[0.6rem]">ANNUAL TECH FEST</p>
          <p className="w-fit laptop:mt-[70px] mobile:mt-[25px] marquee px-[0.6rem]"> ANNUAL TECH FEST</p>
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
