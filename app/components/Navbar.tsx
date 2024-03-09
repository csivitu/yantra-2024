import Image from "next/image"
export default function Navbar(){
    return (
        <nav className="flex w-full bg-black z-[2] items-center justify-between rounded-[12px] border-[1px] border-[#fff] border-opacity-[18%] px-[22px] py-[12px] text-[1rem]">
            <Image src='/hero/vitLogo.svg' alt="Logo" width={130} height={130} className="mobile:w-[40%] laptop:w-[9%]"/>
            <div className=" laptop:w-[45%]  justify-around items-center text-white font-ptMono font-light laptop:flex mobile:hidden">
                <p>ABOUT US</p>
                <p>EVENTS</p>
                <p>TEAM</p>
                <p>SPONSORS</p>
                <p>CONTACT US</p>
            </div>
        </nav>
    )
}