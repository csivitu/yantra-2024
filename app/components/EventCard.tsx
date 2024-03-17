import { convertGoogleDriveUrl } from "@/lib/convert"
import { convertToLocaleString } from "@/lib/time"
import Image from "next/image"

interface EventProps {
    description: string
    name: string
    club: string
    date: string
    venue: string
    event_name: string
    logo: string
}

export default function EventCard(props: EventProps) {
    return (
        <div className="bg-black flex  text-white tab:flex-row rounded-[1.5rem] w-full font-ptMono border-[2px] border-[#292929] px-[1rem] py-[1rem] gap-[1rem] mobile:flex-col mobile:gap-[1rem]">

            <Image width={100} height={100} src={convertGoogleDriveUrl(props.logo)} alt="Image" className="aspect-square laptop:w-[20%]  mobile:w-full rounded-lg" />
            <div className="flex flex-col w-full justify-between laptop:items-start mobile:gap-[1rem]">
                <h1 className="font-ptMono text-[1rem] laptop:p-[0.75rem] mobile:p-[0.65rem] border-[2px] border-[#292929] rounded-xl">{props.event_name}</h1>
                <div className="laptop:w-[50%] flex justify-between laptop:items-center mobile:items-start mobile:flex-col mobile:gap-[1rem] mobile:w-full laptop:flex-row laptop:flex-nowrap mobile:flex-wrap">
                    <h1 className="font-ptMono text-[1rem] laptop:p-[0.75rem] mobile:p-[0.65rem] border-[2px] border-[#292929] rounded-3xl text-[#ff6424] font-light laptop:whitespace-nowrap">{props.club}</h1>
                    <h1 className="font-ptMono text-[1rem] laptop:p-[0.75rem] mobile:p-[0.65rem] border-[2px] border-[#292929] rounded-3xl text-[#ff6424] font-light laptop:whitespace-nowrap">{convertToLocaleString(props.date)}</h1>
                    <h1 className="font-ptMono text-[1rem] laptop:p-[0.75rem] mobile:p-[0.65rem] border-[2px] border-[#292929] rounded-3xl text-[#ff6424] font-light laptop:whitespace-nowrap">{props.venue}</h1>

                </div>
                <p className="text-lg border-[2px] border-[#292929] rounded-xl  laptop:p-[0.75rem] mobile:p-[0.65rem]">{props.description} </p>
                {/* <div className="w-full flex items-end justify-end">
                    <button className="px-[1.5rem] py-[0.75rem] text-2xl bg-[#0281f0] rounded-[1rem] font-semibold inner-shadow-white inner-shadow-black">
                        Register
                    </button>
                </div> */}
            </div>

        </div>
    )
}