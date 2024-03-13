import {authOptions} from "@/lib/auth"
import {NextResponse} from "next/server"
import {getServerSession} from  "next-auth"
import { warn } from "console"

type EventType = {
    name:string
    type:string
    startDate: string
    endDate:string
}
const generateEventData = (totalEvents: number): EventType[] => {
  const eventData: EventType[] = [];

  for (let i = 1; i <= totalEvents; i++) {
    const event: EventType = {
      name: `Event ${i}`,
      type: i % 2 === 0 ? "Workshop" : "Hackathon",
      startDate: "2022-05-01",
      endDate: "2022-05-03",
    };

    eventData.push(event);
  }

  return eventData;
}
export async function GET(req: Request) {
  try{
    const session = await getServerSession(authOptions)
     if(!session){
      return NextResponse.json({message:"unauthenticated"}, {status: 200})
    } 

   //if(session){
    //  return NextResponse.redirect("/dashboard")
    //}
    //return NextResponse.redirect("/login")
    const evevnData = generateEventData(40)
    return NextResponse.json(evevnData, {status: 200})


  }
  catch(e){
      return NextResponse.json({message:"an error occurred"}, {status: 500})
  }
}  

