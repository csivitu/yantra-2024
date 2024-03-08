import Image from "next/image"
interface Props{
    imgUrl:string,
    name:string|null,
    designation:string|null
}
const PatronsCard:React.FunctionComponent<Props>=({imgUrl,name,designation})=>{
    return (
        <div className="flex flex-col justify-between items-center gap-[2rem] border-[1px] border-[#fff]  rounded-[18px] px-[1rem]  border-opacity-[24%] py-[2rem]">
            
            <Image width={200} height={200} alt="Profile Photo" src={imgUrl.toString()} className=" rounded-[100000px] w-[250px] h-[250px]"/>
        <p className="text-[#eaeaea] font-ptMono text-3xl">{name}</p>
        <div className="flex flex-row justify-center items-center gap-[1rem] border-[1px] border-[#fff]  rounded-[18px] px-[1rem]">
             <div className="w-[10px] h-[10px] bg-[#eaeaea] rounded-full"></div>
            <p className="text-[#eaeaea] font-ptMono text-lg">{designation}</p>
           
        </div>
        </div>
    )
}
export default PatronsCard