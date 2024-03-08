export default function Timeline(){
    const timeArray=[9,10,11,12,1,2,3,4,5,6,7,8,9]
    return (
        <main className="w-full flex flex-col justify-between items-start px-[3rem] min-h-[80vh] gap-[2rem]">
            <div className="w-full flex justify-between items-center">
            <h1 className=" font-ptMono text-[#eaeaea] text-6xl">
                TIMELINE
            </h1>
            <h1 className=" font-ptMono text-[#ff6424] text-4xl">
                MARCH*
            </h1>
            </div>
            <section className="grid grid-cols-6 gap-[1rem] w-full">
            <div className="flex flex-col gap-[40px]">
            <div className="font-schabo text-white text-[76px] border-[1px] border-[#292929] rounded-[74px] px-[28px] py-[28px] text-center align-bottom leading-none invisible">
                TIME
            </div>
                <div className="flex flex-col gap-[40px] border-[#292929]  border-[1px] rounded-[20px] py-[1rem]">
                    {timeArray.map((time:number,idx:number)=>{
                    return (
                        <div key={idx} className="text-[#fff] text-opacity-60 text-center font-ptMono text-2xl">{time} AM</div>
                    )
                })}
                </div>
            </div>
            <div className="flex flex-col gap-[40px]">
            <div className="font-schabo text-white text-[76px] border-[1px] border-[#292929] rounded-[74px] px-[28px] py-[28px] text-center align-bottom leading-none">
            19 <sup>th</sup>
            </div>
                <div className="flex flex-col gap-[40px] border-[#292929]  border-[2px] rounded-[20px] py-[1rem] h-full">
                    {/* {timeArray.map((time:number,idx:number)=>{
                    return (
                        <div key={idx} className="text-[#fff] text-opacity-60 text-center font-ptMono text-2xl">{'  '}</div>
                    )
                })} */}
               <div className="text-[#fff]  text-center font-ptMono text-2xl">Opening ceremony</div>
                </div>
            </div>
            <div className="flex flex-col gap-[40px]">
            <div className="font-schabo text-white text-[76px] border-[1px] border-[#292929] rounded-[74px] px-[28px] py-[28px] text-center align-bottom leading-none">
            20 <sup>th</sup>
            </div>
                <div className="flex flex-col gap-[40px] border-[#292929]  border-[2px] rounded-[20px] py-[1rem]  h-full">
                    {timeArray.map((time:number,idx:number)=>{
                    return (
                        <div key={idx} className="text-[#fff] text-opacity-60 text-center font-ptMono text-2xl">{'  '}</div>
                    )
                })}
                </div>
            </div>
            <div className="flex flex-col gap-[40px]">
            <div className="font-schabo text-white text-[76px] border-[1px] border-[#292929] rounded-[74px] px-[28px] py-[28px] text-center align-bottom leading-none">
                21 <sup>st</sup>
            </div>
                <div className="flex flex-col gap-[40px] border-[#292929]  border-[2px] rounded-[20px] py-[1rem]  h-full">
                    {/* {timeArray.map((time:number,idx:number)=>{
                    return (
                        <div key={idx} className="text-[#fff] text-opacity-60 text-center font-ptMono text-2xl ">{'  '}</div>
                    )
                })} */}
                 <div className="text-[#fff]  text-center font-ptMono text-2xl">Event1</div>
                 <div className="text-[#fff]  text-center font-ptMono text-2xl">{'  '}</div>
                 <div className="text-[#fff]  text-center font-ptMono text-2xl">Opening ceremony ending</div>
                </div>
            </div>
            <div className="flex flex-col gap-[40px]">
            <div className="font-schabo text-white text-[76px] border-[1px] border-[#292929] rounded-[74px] px-[28px] py-[28px] text-center align-bottom leading-none">
                22 <sup>nd</sup>
            </div>
                <div className="flex flex-col gap-[40px] border-[#292929]  border-[1px] rounded-[20px] py-[1rem]  h-full">
                    {timeArray.map((time:number,idx:number)=>{
                    return (
                        <div key={idx} className="text-[#fff] text-opacity-60 text-center font-ptMono text-2xl">{'  '}</div>
                    )
                })}
                </div>
            </div>
            <div className="flex flex-col gap-[40px]">
            <div className="font-schabo text-white text-[76px] border-[1px] border-[#292929] rounded-[74px] px-[28px] py-[28px] text-center align-bottom leading-none">
                23 <sup>rd</sup>
            </div>
                <div className="flex flex-col gap-[40px] border-[#292929]  border-[1px] rounded-[20px] py-[1rem]  h-full">
                    {timeArray.map((time:number,idx:number)=>{
                    return (
                        <div key={idx} className="text-[#fff] text-opacity-60 text-center font-ptMono text-2xl">{'  '}</div>
                    )
                })}
                </div>
            </div>
            </section>
        </main>
    )
}