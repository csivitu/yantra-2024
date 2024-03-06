import  { PrismaClient } from "@prisma/client";
import {authOptions} from "@/lib/auth"
import {getSession} from "next-auth/react"
import {NextResponse} from "next/server"
import {getServerSession} from  "next-auth"
import { warn } from "console";
const prisma = new PrismaClient();

export async function POST(request:Request){
    try{
        const {description, gLink, fLink, dLink} = await request.json();
        const session = await getServerSession(authOptions);
        const  user= await prisma.user.findFirst({
            where: {name: session?.user?.name},

        })
        console.log({user})
        const teamName = user?.teamName;
        const response = await prisma.team.update({
            where:{
                teamName: teamName,
            },
            data:{
                description: description,
                gLink: gLink,
                fLink: fLink,
                dLink: dLink
            }
        })
        //console.log({team})
        console.log('successful')
    } catch(err){
        console.log(err);
    }
    return NextResponse.json({message:"Team created successfully"})
}
