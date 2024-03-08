import { PrismaClient } from "@prisma/client";
import {authOptions} from "@/lib/auth"
import {getSession} from "next-auth/react"
import {v4 as uuidv4} from "uuid"
import {NextResponse} from "next/server"
import {getServerSession} from  "next-auth"
const prisma = new PrismaClient();

const generateInviteCode = () => {
    return uuidv4().replace(/-/g, '').substring(0, 6).toUpperCase();
}
export async function POST(request:Request){
    try{
        const {teamName, description} = await request.json();
        const session = await getServerSession(authOptions);
        if (session?.user?.name) {

            const result = await prisma.team.create({
                data: {
                    teamName: teamName,
                    description: description,
                    teamCode: generateInviteCode(),
                    createdBy: { connect: { name: session?.user?.name } },
                },

            })
            const userUpdate = await prisma.user.update({
                where: { name: session?.user?.name },
                data: {
                    teamName: teamName,
                }
            })
        }
        console.log('successful')
        console.log('successful')
    } catch(err){
        console.log(err);
    }
    return NextResponse.json({message:"Team created successfully"})
}
