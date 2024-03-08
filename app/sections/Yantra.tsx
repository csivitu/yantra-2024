export default function Yantra(){
    return (
        <main className="w-full flex justify-around items-start laptop:min-h-[80vh] laptop:flex-row mobile:flex-col mobile:px-[1rem]">
            <section className="flex flex-col laptop:w-[45%] gap-[12px] h-full mobile:w-full">
                <div className="font-ptMono text-white text-5xl border-[1px] border-[#292929] rounded-[20px] px-[28px] py-[28px] text-center ">
              WHAT IS YANTRA?
                </div>
                <div className="font-ptMono text-white text-5xl border-[1px] border-[#292929] rounded-[20px] px-[28px] py-[28px] text-center h-auto">
               {`       `}
                </div>
                <div className="border-[1px] border-[#292929] rounded-[20px]">
                <div className="bg-imgYantra bg-no-repeat bg-cover bg-center border-[1px] border-[#292929] rounded-[20px] h-[600px]  mix-blend-hard-light">
</div> 
                </div>
              
            </section>
            <section className="flex flex-col laptop:w-[52%] gap-[12px] laptop:h-full mobile:w-full mobile:gap-[1rem]">
                <div className=" laptop:text-[375px] laptop:h-[360px] text-transparent bg-clip-text border-[1px] border-[#292929] rounded-[20px]    overflow-x-clip bg-gradient-radial from-[#B6C2FF] to-[#00051D] font-schabo  whitespace-nowrap  justify-center items-center leading-none flex mobile:text-[100px] mobile:text-center">
               <p className="w-full laptop:mt-[90px] mobile:mt-[25px]"> ANNUAL TECH</p>
                </div>
                <div className="font-ptMono text-white text-2xl border-[1px] border-[#292929] rounded-[20px] px-[28px] py-[28px] leading-9 ">
                Riviera is the Annual International Sports and Cultural Carnival of the Vellore Institute of Technology. It is an International 4-day event that consists of sports competitions, social and cultural events along with concerts. The 2016 edition of Riviera witnessed a footfall of more than 30,000 students from over 650 colleges from across the country. It is organised primarily by the students of the college. It has a wide variety of competitions and events, which range from dramatic, literary, musical, dance, debate 
                </div>
                <div className="font-ptMono text-white text-5xl border-[1px] border-[#292929] rounded-[20px] px-[28px] py-[28px] text-center">
               {`       `}
                </div>
            </section>
        </main>
    )
}