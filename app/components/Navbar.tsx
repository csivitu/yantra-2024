import Image from "next/image"
export default function Navbar(){
    return (
        <nav className="flex w-full bg-black z-[2] items-center justify-between rounded-[12px] border-[2px] border-[#fff] border-opacity-[18%] px-[40px] py-[26px] text-xl">
            <Image src='/hero/vitLogo.svg' alt="Logo" width={150} height={150}/>
            <div className="flex w-[50%] justify-between items-center text-white font-ptMono font-light">
                <p>ABOUT US</p>
                <p>EVENTS</p>
                <p>TEAM</p>
                <p>SPONSORS</p>
                <p>CONTACT US</p>
            </div>
        </nav>
    )
}