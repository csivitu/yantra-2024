import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import Page from "./redirect"
import Link from "next/link"

export default async function Dashboard(){
    const session = await getServerSession(authOptions);
    if(session){
        console.log(session)
    }
    const User  = await prisma.user.findUnique({
        where:{
            name:session?.user?.name,
        },
        })
    console.log({User})
    if(User.teamName === null){
        return (
            <div>
                <h1>Dashboard</h1>
                <p>You are not in a team</p>
                <Page/> 
            </div>
        )
    }
    const team = await prisma.team.findFirst({
        where:{
            teamName:User?.teamName,
        },
        })
    console.log({team})
    const members = await prisma.user.findMany({
        where:{
            teamName:User?.teamName,
        },
        select:{
            name:true,
        }
        })
    console.log({members})

    return (
            <div>
            <h1>Dashboard</h1>
            <p>Team Name: {team?.teamName}</p>
            <p>Team Code: {team?.teamCode}</p>
            <p>Description: {team?.description}</p>
            <p>Github Link: {team.gLink ? team.gLink : "Not set"}</p>
            <p>Figma Link: {team.fLink ? team.fLink : "Not set"}</p>
            <p>Deploy Link: {team.dLink ? team.dLink : "Not set"}</p>
            <Link href="/team/update">Update Team Info</Link>
        </div>
    )
    //add members list
}
