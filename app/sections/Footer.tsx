import Image from "next/image"
export default function Footer(){
    return (
        <footer className="w-full flex px-[3rem] gap-[1rem] justify-between h-[524px] overflow-y-hidden ">
            <section className="flex flex-col  justify-between">
                <div className="font-ptMono text-white text-2xl border-[1px] border-[#292929] rounded-full px-[28px] py-[28px] text-center ">
                Menu
                </div>
                <div className="px-[4rem] font-ptMono text-opacity-60 flex flex-col h-[80%] justify-around text-white text-2xl border-[1px] border-[#292929] rounded-[2rem]  py-[28px] text-center  ">
                <div>
                    Home
                </div>
                <div>
                    About Us
                </div>
                <div>
                    Team
                </div>
                <div>
                    Main Hack
                </div>
                </div>
            </section>
            <section className="flex flex-col w-[70%] justify-between h-[524px]">
                <div className="w-full h-[50%] flex justify-center border-[1px] border-[#292929] rounded-[20px]">
                <Image alt="Yantra Logo" src={'/hero/mainLogo.svg'} width={1000} height={1000} className="h-full w-auto"/>
                </div>
                <div className="flex justfiy-between gap-[1rem] items-end w-full">
                <div className="w-[75%] h-[90%] text-[315px]  text-transparent bg-clip-text border-[1px] border-[#292929] rounded-[20px]  inline-block align-center overflow-x-clip bg-gradient-radial from-[#B6C2FF] to-[#00051D] font-schabo  leading-none whitespace-nowrap text-center">
                MADE WITH LOVE BY IXDA
                </div>
                <div className="px-[4rem] font-ptMono text-opacity-60 flex flex-col gap-[2rem] text-white text-2xl border-[1px] border-[#292929] rounded-[2rem] w-[25%] py-[28px] text-center ">
                <div className="text-[#fff] text-3xl">
                    Contact Us
                </div>
                <div className="font-aeonik">
                @dsw.vit.ac.in
                </div>
                <div className="font-aeonik">
                9850278492
                </div>
                <div className="font-aeonik">
                @dsw.vit.ac.in
                </div>
                </div>
                </div>
            </section>
            <section className="flex flex-col  justify-between">
                <div className="font-ptMono text-white text-2xl border-[1px] border-[#292929] rounded-full px-[28px] py-[28px] text-center ">
                Links
                </div>
                <div className="px-[4rem] font-ptMono text-opacity-60 flex flex-col h-[80%] justify-around text-white text-2xl border-[1px] border-[#292929] rounded-[2rem]  py-[28px] text-center ">
                <div className="flex w-full flex-row justify-around items-center gap-[1rem]">
                    <p>Twitter</p>
                    <Image width={20} height={20} src={'/icons/Brands/Vector.svg'} alt="Twitter"/>
                </div>
                <div className="flex w-full flex-row justify-around items-center gap-[1rem]">
                    <p>Linkedin</p>
                    <Image width={20} height={20} src={'/icons/linkedin/Brands/Vector.svg'} alt="Linkedin"/>
                </div>
                <div className="flex w-full flex-row justify-around items-center gap-[1rem]">
                    <p>Youtube</p>
                    <Image width={20} height={20} src={'/icons/yt/Vector.svg'} alt="Youtube"/>
                </div>
                <div className="flex w-full flex-row justify-around items-center gap-[1rem]">
                    <p>Instagram</p>
                    <Image width={20} height={20} src={'/icons/Brands/Vector.svg'} alt="Instagram"/>
                </div>
                </div>
            </section>
        </footer>
    )
}