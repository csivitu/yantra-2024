import SmoothScroll from "@/lib/smoothScroll";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex w-full bg-black z-[2] items-center justify-between rounded-[12px] border-[1px] border-[#fff] border-opacity-[18%] px-[22px] py-[12px] text-[1.2rem]">
      <Link href="/" className="w-full h-full">
        <Image
          src="/hero/vitLogo.svg"
          alt="Logo"
          width={130}
          height={130}
          className="mobile:w-[40%] laptop:w-[15%]"
        />
      </Link>
      <div className=" laptop:w-[53%]  justify-around items-center text-white font-ptMono font-light laptop:flex mobile:hidden">
        <SmoothScroll target="#about" route="/">
          About us
        </SmoothScroll>
        <Link href={'/event'}>
          <p>Events</p>
        </Link>
        <SmoothScroll target="#patrons" route = "/">
          Team
        </SmoothScroll>
        <SmoothScroll target="#contactus" route = "/">
          Contact us
        </SmoothScroll>
      </div>
    </nav>
  );
}
