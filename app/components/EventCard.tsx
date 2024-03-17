import Image from "next/image"
export default function EventCard(){
    return (
        <div className="bg-black flex  text-white tab:flex-row rounded-[1.5rem] w-full font-ptMono border-[2px] border-[#292929] px-[1rem] py-[1rem] gap-[1rem] mobile:flex-col mobile:gap-[1rem]">
        
        <Image width={100} height={100} src={"/pfps/sekar.webp"} alt="Image" className="aspect-square laptop:w-[20%]  mobile:w-full rounded-lg"/>
        <div className="flex flex-col w-full justify-between laptop:items-start mobile:gap-[1rem]">
            <h1 className="font-ptMono text-[1rem] laptop:p-[0.75rem] mobile:p-[0.65rem] border-[2px] border-[#292929] rounded-xl">Spectrum Designathon</h1>
        <div className="laptop:w-[50%] flex laptop:flex-row justify-between laptop:items-center mobile:items-start mobile:flex-col mobile:gap-[1rem] mobile:w-full flex-wrap">
        <h1 className="font-ptMono text-[1rem] laptop:p-[0.75rem] mobile:p-[0.65rem] border-[2px] border-[#292929] rounded-3xl text-[#ff6424] font-light">Spectrum Designathon</h1>
        <h1 className="font-ptMono text-[1rem] laptop:p-[0.75rem] mobile:p-[0.65rem] border-[2px] border-[#292929] rounded-3xl text-[#ff6424] font-light">Spectrum Designathon</h1>
        <h1 className="font-ptMono text-[1rem] laptop:p-[0.75rem] mobile:p-[0.65rem] border-[2px] border-[#292929] rounded-3xl text-[#ff6424] font-light">Spectrum Designathon</h1>

        </div>
        <p className="text-lg border-[2px] border-[#292929] rounded-xl  laptop:p-[0.75rem] mobile:p-[0.65rem]">Riviera is the Annual International Sports and Cultural Carnival of the Vellore Institute of Technology. It is an International 4-day event that consists of sports competitions, social and cultural events along with concerts. The 2016 edition of Riviera witnessed a footfall of more than 30,000 students from over 650 colleges from across the country. </p>
        <div className="w-full flex items-end justify-end">
        <button className="px-[1.5rem] py-[0.75rem] text-2xl bg-[#0281f0] rounded-[1rem] font-semibold inner-shadow-white inner-shadow-black">
            Register
        </button>
        </div>
        </div>
        
        </div>
    )
}