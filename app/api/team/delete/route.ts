import {authOptions} from "@/lib/auth"
import {NextResponse} from "next/server"
import {getServerSession} from  "next-auth"
import {prisma} from "@/lib/call"

export async function POST(request:Request){
    try{
        const session = await getServerSession(authOptions)
        if (!session) {
            return NextResponse.json({message:"Session not found"})
        }
        if (!session.user){
            return NextResponse.json({message:"User not found"})
        }
        if(!session.user.name){
            return NextResponse.json({message:"User not found"})
        }
        const user = await prisma.user.findFirst({
            where : {name:session.user.name},
        })
//        await prisma.user.update({
//            where : {name:session.user.name},
//            data:{
//                teamName:null,
//            }
//        })
//        await prisma.team.update({
//            where : {userName:session.user.name},
//            data:{
//                userName:null,
//            }
//        })
        return NextResponse.json({message:"User deleted"})

    }
    catch(err){
        return NextResponse.json({message:"Error"})
    }
}
