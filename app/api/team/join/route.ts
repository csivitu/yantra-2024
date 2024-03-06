import { PrismaClient } from "@prisma/client";
import {authOptions} from "@/lib/auth"
import {getSession} from "next-auth/react"
import {v4 as uuidv4} from "uuid"
import {NextResponse} from "next/server"
import {getServerSession} from  "next-auth"
const prisma = new PrismaClient();
export async function POST(request:Request){
    try{
        const {teamName, teamCode} = await request.json();
        const session = await getServerSession(authOptions);
        const team = await prisma.team.findFirst({
            where:{
                teamName: teamName,
            }
        })
        const userName = session?.user?.name;
        console.log({team})
        if(teamCode === team?.teamCode && userName !== team?.userName){
            const userUpdate = await prisma.user.update({
                where: {name: session?.user?.name},
                data: {
                    teamName:teamName,
                }
            }) 
        }
        else{
            console.log("invalid team code or already part of the team")
        }
       console.log('successful')
    } catch(err){
        console.log(err);
    }
    return NextResponse.json({message:"Team created successfully"})
}
