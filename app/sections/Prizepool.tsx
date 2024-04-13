import React from "react";
import Image from "next/image";

type PrizePoolProps = {};

const PrizePool: React.FC<PrizePoolProps> = () => {
  return (
    <div className="w-full bg-prizedots overflow-y-hidden" id="#prizepool">
      <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-b from-transparent to-green-500 ">
        <div className=" text-white font-aeonik mobile:text-lg laptop:text-2xl  bg-gradient-to-b from-green-500 to-green-600 rounded-full mobile:p-4 laptop:p-6 mobile:px-[3rem] laptop:px-[3rem] border border-white mt-[4rem] m-[2rem]">
          PRIZE POOL
        </div>
        <div className=" text-white font-ptMono mobile:text-6xl tab:text-8xl laptop:text-[10rem]   rounded-full p-6 px-[3rem] mt-[0]  mb-[2rem]">
          <span className="font-aeonik">₹</span>5,00,000
        </div>
        <div className="w-full h-full">
          <div className="block">
            <div className="flex mobile:flex-col mobile:items-center mobile:justify-between mobile: laptop:flex-row  laptop:mx-[3rem] laptop:justify-between gap-3 laptop:items-end laptop:h-[90vh] ">
              <div className="flex flex-col justify-end items-center mobile:w-90% laptop:w-[16%] h-full">
                <div className="border-2 border-white/50 p-3 rounded-full px-[1.5rem] m-3 font-ptMono text-xl text-white/50">
                  1st
                </div>
                <div className="rounded-t-full bg-gradient-to-b border-2 border-white/30 w-full h-full from-green-500 to-green-600 text-center justify-between items-center flex flex-col mobile:px-10 pt-[5rem] pb-[1rem]">
                  <div className="text-4xl text-white ">FIRST PRIZE</div>
                  <div className="text-2xl text-white font-aeonik">
                    ₹1,20,000
                    <div className="w-full h-[5px] bg-white/40 mt-2"></div>
                  </div>
                  <div className="text-xl text-white font-aeonik mobile:pt-3">
                    {/* LoremIpsum <br /> LoremIpsum <br /> LoremIpsum */}
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-end items-center mobile:w-90% laptop:w-[16%] h-[85%]">
                <div className="border-2 border-white/50 p-3 rounded-full px-[1.5rem] m-3 font-ptMono text-xl text-white/50">
                  2nd
                </div>
                <div className="rounded-t-full bg-gradient-to-b border-2 border-white/30 w-full h-full from-green-500 to-green-600 text-center justify-between items-center flex flex-col mobile:px-10 pt-[5rem] pb-[1rem]">
                  <div className="text-4xl text-white ">SECOND PRIZE</div>
                  <div className="text-2xl text-white font-aeonik">
                    ₹80,000
                    <div className="w-full h-[5px] bg-white/40 mt-2"></div>
                  </div>
                  <div className="text-xl text-white font-aeonik mobile:pt-3">
                    {/* LoremIpsum <br /> LoremIpsum <br /> LoremIpsum */}
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-end items-center mobile:w-90% laptop:w-[16%] h-[70%]">
                <div className="border-2 border-white/50 p-3 rounded-full px-[1.5rem] m-3 font-ptMono text-xl text-white/50">
                  3rd
                </div>
                <div className="rounded-t-full bg-gradient-to-b border-2 border-white/30 w-full h-full from-green-500 to-green-600 text-center justify-between items-center flex flex-col mobile:px-10 pt-[5rem] pb-[1rem]">
                  <div className="text-4xl text-white ">THIRD PRIZE</div>
                  <div className="text-2xl text-white font-aeonik">
                    ₹60,000
                    <div className="w-full h-[5px] bg-white/40 mt-2"></div>
                  </div>
                  <div className="text-xl text-white font-aeonik mobile:pt-3">
                    {/* LoremIpsum <br /> LoremIpsum <br /> LoremIpsum */}
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-end items-center mobile:w-90% laptop:w-[16%] h-[60%]">
                <div className="border-2 border-white/50 p-3 rounded-full px-[1.5rem] m-3 font-ptMono text-xl text-white/50">
                  <Image
                    src="/icons/medal.svg"
                    alt="Icon"
                    width={40}
                    height={40}
                    className="m-2"
                  />
                </div>
                <div className="rounded-t-full bg-gradient-to-b border-2 border-white/30 w-full h-full from-green-500 to-green-600 text-center justify-between items-center flex flex-col mobile:px-10 pt-[5rem] pb-[1rem]">
                  <div className="text-4xl text-white ">
                    BEST IMPLEMENTATION
                  </div>
                  <div className="text-2xl text-white font-aeonik">
                    ₹15,000
                    <div className="w-full h-[5px] bg-white/40 mt-2"></div>
                  </div>
                  <div className="text-xl text-white font-aeonik mobile:pt-3">
                    {/* LoremIpsum <br /> LoremIpsum <br /> LoremIpsum */}
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-end items-center mobile:w-90% laptop:w-[16%] h-[85%]">
                <div className="border-2 border-white/50 p-3 rounded-full px-[1.5rem] m-3 font-ptMono text-xl text-white/50">
                  <Image
                    src="/icons/medal.svg"
                    alt="Icon"
                    width={40}
                    height={40}
                    className="m-2"
                  />
                </div>
                <div className="rounded-t-full bg-gradient-to-b border-2 border-white/30 w-full h-full from-green-500 to-green-600 text-center justify-between items-center flex flex-col mobile:px-10 pt-[5rem] pb-[1rem]">
                  <div className="text-4xl text-white ">BEST UI/UX</div>
                  <div className="text-2xl text-white font-aeonik">
                    ₹15,000
                    <div className="w-full h-[5px] bg-white/40 mt-2"></div>
                  </div>
                  <div className="text-xl text-white font-aeonik mobile:pt-3">
                    {/* LoremIpsum <br /> LoremIpsum <br /> LoremIpsum */}
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-end items-center mobile:w-90% laptop:w-[16%] h-full">
                <div className="border-2 border-white/50 p-3 rounded-full px-[1.5rem] m-3 font-ptMono text-xl text-white/50">
                  <Image
                    src="/icons/medal.svg"
                    alt="Icon"
                    width={40}
                    height={40}
                    className="m-2"
                  />
                </div>
                <div className="rounded-t-full bg-gradient-to-b border-2 border-white/30 w-full h-full from-green-500 to-green-600 text-center justify-between items-center flex flex-col mobile:px-10 pt-[5rem] pb-[1rem]">
                  <div className="text-4xl text-white ">TRACK WINNERS</div>
                  <div className="text-2xl text-white font-aeonik">
                    ₹35,000
                    <div className="w-full h-[5px] bg-white/40 mt-2"></div>
                  </div>
                  <div className="text-xl text-white font-aeonik mobile:pt-3">
                    Per Track
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PrizePool;
