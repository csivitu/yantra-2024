import Image from "next/image";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="w-full flex mobile:px-[1rem] laptop:px-[3rem] gap-[1rem] justify-between laptop:h-[324px] overflow-y-hidden mobile:flex-col laptop:flex-row">
      <section className="flex flex-col  justify-between mobile:gap-[1rem] laptop:gap-[1rem]">
        <div className="font-ptMono text-white text-2xl border-[1px] border-[#292929] rounded-full px-[28px] py-[28px] text-center ">
          MENU
        </div>
        <div className="px-[3rem] font-ptMono text-opacity-60 flex flex-col h-[80%] justify-around text-white text-xl border-[1px] border-[#292929] rounded-[2rem]  py-[28px] text-center  ">
          <Link href = "#home" className="w-full">Home</Link>
          <Link href="#yantra" className="w-full whitespace-nowrap">About Us</Link>
          <Link href="#tracks" className="w-full whitespace-nowrap">Tracks</Link>
          <Link href="#guidelines" className="w-full whitespace-nowrap">Guidelines</Link>
          {/* <div className="w-full">Team</div>
          <div className="w-full whitespace-nowrap">Main Hack</div> */}
        </div>
      </section>
      <section className="flex flex-col laptop:w-[70%] justify-between gap-[1rem] mobile:w-full">
        <div className="w-full h-[50%] flex justify-center border-[1px] border-[#292929] rounded-[20px] relative laptop:block mobile:hidden">
          <Image
            alt="Yantra Logo"
            src={"/hero/mainLogo.svg"}
            width={200}
            height={200}
            className="absolute top-[50%] translate-y-[-45%] translate-x-[-50%] left-[50%]"
          />
        </div>
        <div
          className="flex justfiy-between gap-[1rem] laptop:items-end mobile:w-full mobile:items-center"
          id="contactus"
        >
          <div className="laptop:px-[4rem] mobile:px-[1rem] font-ptMono text-opacity-60 flex flex-col gap-[2rem] text-white text-2xl border-[1px] border-[#292929] rounded-[2rem] w-full py-[28px] text-center mobile:w-full">
            <div className="text-[#fff] text-3xl">Contact Us</div>
            <div className="font-aeonik">yantra.sw@vit.ac.in</div>
            <div className="font-aeonik">8583984787</div>
          </div>
        </div>
      </section>
      <section className="flex flex-col  justify-between mobile:gap-[1rem] laptop:gap-[1rem]">
        <div className="font-ptMono text-white text-2xl border-[1px] border-[#292929] rounded-full px-[28px] py-[28px] text-center ">
          LINKS
        </div>
        <div className="px-[4rem] font-ptMono text-opacity-60 flex flex-col h-[80%] justify-around text-white text-xl border-[1px] border-[#292929] rounded-[2rem]  py-[28px] text-center ">
          <Link href="https://twitter.com/VIT_univ"
            className="flex w-full flex-row justify-around items-center gap-[1rem] transition-colors duration-200 hover:text-purple-500"

          >
            <p>Twitter</p>
            <Image
              width={20}
              height={20}
              src={"/icons/Brands/Vector.svg"}
              alt="Twitter"
            />
          </Link>
          <Link href="https://www.linkedin.com/school/vellore-institute-of-technology/mycompany/" 
            className="flex w-full flex-row justify-around items-center gap-[1rem] transition-colors duration-200 hover:text-purple-500">
            <p>Linkedin</p>
            <Image
              width={20}
              height={20}
              src={"/icons/linkedin/Brands/Vector.svg"}
              alt="Linkedin"
            />
          </Link>
          <Link href="https://www.youtube.com/channel/UCA9pirjKrKlg2bCvPKRDkyg" 
            className="flex w-full flex-row justify-around items-center gap-[1rem] transition-colors duration-200 hover:text-purple-500">
            <p>Youtube</p>
            <Image
              width={20}
              height={20}
              src={"/icons/yt/Vector.svg"}
              alt="Youtube"
            />
          </Link>

          {/* <Link href="https://www.instagram.com/sw_vit/" 
            className="flex w-full flex-row justify-around items-center gap-[1rem] transition-colors duration-200 hover:text-purple-500">
            <p>Instagram</p>
            <Image
              width={20}
              height={20}
              src={"/icons/Brands/Vector.svg"}
              alt="Instagram"
            />
          </Link> */}
        </div>
      </section>
    </footer>
  );
}
