import {authOptions} from "@/lib/auth"
import {NextResponse} from "next/server"
import {getServerSession} from  "next-auth"
import {prisma} from "@/lib/call"

export async function POST(){
    try{
        const session = await getServerSession(authOptions);

        if (!session || !session.user || !session.user.name) {
            return NextResponse.json({ message: "Invalid session or user" },{status:401});
        }

        const user = await prisma.user.findFirst({
            where : {name:session.user.name},
        })
        if(!user){
            return NextResponse.json({message:"User not found"},{status:404})
        }
        if(!user.teamId){
            return NextResponse.json({message:"User not part of a team"},{status:400})
        }
        await prisma.user.update({
            where : {name:session.user.name},
            data:{
                teamId:null,
            }
        })
        await prisma.team.update({
            where : {id:user.teamId},
            data:{
                users:{
                    disconnect:{
                        name:session.user.name
                    }
                }
            }
        
        })
        return NextResponse.json({message:"User deleted"},{status:200})

    }
    catch(err){
        return NextResponse.json({message:"Error"},{status:500})    
    }
}
