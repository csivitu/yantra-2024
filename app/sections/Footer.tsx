import Image from "next/image"
export default function Footer(){
    return (
        <footer className="w-full flex mobile:px-[1rem] laptop:px-[3rem] gap-[1rem] justify-between laptop:h-[524px] overflow-y-hidden mobile:flex-col laptop:flex-row">
            <section className="flex flex-col  justify-between mobile:gap-[1rem] laptop:gap-[0rem]">
                <div className="font-ptMono text-white text-2xl border-[1px] border-[#292929] rounded-full px-[28px] py-[28px] text-center ">
                MENU
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
            <section className="flex flex-col laptop:w-[70%] justify-between gap-[1rem] mobile:w-full">
                <div className="w-full h-[50%] flex justify-center border-[1px] border-[#292929] rounded-[20px] relative laptop:block mobile:hidden">
                <Image alt="Yantra Logo" src={'/hero/mainLogo.svg'} width={550} height={550} className="absolute top-[50%] translate-y-[-45%] translate-x-[-50%] left-[50%]"/>
                </div>
                <div className="flex justfiy-between gap-[1rem] laptop:items-end mobile:w-full mobile:items-center">
                <div className="laptop:px-[4rem] mobile:px-[1rem] font-ptMono text-opacity-60 flex flex-col gap-[2rem] text-white text-2xl border-[1px] border-[#292929] rounded-[2rem] w-full py-[28px] text-center mobile:w-full">
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
            <section className="flex flex-col  justify-between mobile:gap-[1rem] laptop:gap-[0rem]">
                <div className="font-ptMono text-white text-2xl border-[1px] border-[#292929] rounded-full px-[28px] py-[28px] text-center ">
                LINKS
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