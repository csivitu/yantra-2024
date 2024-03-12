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
               <p className="w-full laptop:mt-[90px] mobile:mt-[25px]"> ANNUAL</p>
                </div>
                <div className="font-ptMono text-white text-2xl border-[1px] border-[#292929] rounded-[20px] px-[28px] py-[28px] leading-9 ">
                Yantra is an annual tech fest organized by Vellore Institute of Technology (VIT), celebrating innovation and technology. This week-long extravaganza features exciting competitions like hackathons, coding challenges, workshops, and technical talks.

Promoting sustainable development goals, Yantra encourages students to develop innovative solutions that address real-world challenges through its flagship hackathon event. The fest fosters a vibrant community of tech enthusiasts, offering opportunities for collaboration, knowledge exchange, and showcasing technical skills.

With a dynamic atmosphere and emphasis on creativity, problem-solving, and technological advancement, Yantra has become a highly anticipated event at VIT, inspiring students to push boundaries and drive positive change. </div>
                <div className="font-ptMono text-white text-5xl border-[1px] border-[#292929] rounded-[20px] px-[28px] py-[28px] text-center">
               {`       `}
                </div>
            </section>
        </main>
    )
}