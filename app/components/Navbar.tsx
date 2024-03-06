import Image from "next/image"
export default function Navbar(){
    return (
        <nav className="flex w-full bg-black z-[2] items-center justify-between rounded-[12px] border-[2px] border-[#fff] border-opacity-[18%] px-[40px] py-[26px] text-xl">
            <Image src='/hero/vitLogo.svg' alt="Logo" width={100} height={100}/>
            <div className="flex w-[50%] justify-between items-center text-white font-concreteMono font-light">
                <p>About Us</p>
                <p>Events</p>
                <p>Team</p>
                <p>Sponsors</p>
                <p>Contact Us</p>
            </div>
        </nav>
    )
}