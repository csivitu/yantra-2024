import {prisma} from "@/lib/call";
import Page from "./redirect"
import Link from "next/link"
import Form from './form'
import {getSession} from "next-auth/react"

export default async function Dashboard(){
    const session = await getSession()
//    if(session){
//        console.log(session)
//    }
    if(!session?.user?.name){//will never run though, the user will get redirected to login
        return (
            <div>
                <p>Dashboard</p>
                <p>Not logged in</p>
                <Page/> 
            </div>
        ) } 
    const User  = await prisma.user.findUnique({
        where:{
            name:session?.user?.name,
        },
        })
    if(!User){//will never run though, the user will get redirected to login
        return (
            <div>
                <p>Dashboard</p>
                <p>Not logged in</p>
                <Page/> 
            </div>
        )
    }
    if(User.teamName === null){
        return (
            <div>
                <p>Dashboard</p>
                <p>Not in a team</p>
                <Page/> 
            </div>
        )
    } else{
        const team = await prisma.team.findFirst({
            where:{
                teamName:User?.teamName,
            },
        })
        if(!team){//kyu bhai 
            return (
            <div>
                <p>Dashboard</p>
                <p>Not in a team</p>
                <Page/> 
            </div>
            )
        }
        return(
        <div>
        <h1>Dashboard</h1>
        <p>Team Name: {team?.teamName}</p>
        <p>Team Code: {team?.teamCode}</p>
        <p>Description: {team?.description}</p>
        <p>Github Link: {team.gLink ? team.gLink : "Not set"}</p>
        <p>Figma Link: {team.fLink ? team.fLink : "Not set"}</p>
        <p>Deploy Link: {team.dLink ? team.dLink : "Not set"}</p>
        <Form/>
        <Link href="/team/update">Update Team Info</Link>
        </div>
        )
   } 
}
