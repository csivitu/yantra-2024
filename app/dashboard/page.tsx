import {getSession} from 'next-auth/react'
import {getServerSession} from 'next-auth'
import {authOptions} from "@/lib/auth"
import Page from './redirect'
import Link from 'next/link'
import Form from './form'
import {getTeamInfo, getUserInfo,Team} from '@/lib/call'
import {NextResponse} from 'next/server'

export default async function Dashboard(){
    //const session = await getSession()--not working here
    const session = await getServerSession(authOptions)  
    if(!session){
       return(
        <Link href="/login">
        Go to Login
        </Link>
       )
    }
    if(!session.user){
       return(
        <Link href="/login">
        Go to Login
        </Link>
       )
    }
    if(!session.user.name){
       return(
        <Link href="/login">
        Go to Login
        </Link>
       )
    }
    const user = await getUserInfo(session.user.name)
    if(!user){
       return(
        <Link href="/login">
        Go to Login
        </Link>
       )
    }
    if(!user.teamId){
        return(
        <div>
            <h1>Dashboard</h1>
            <p>Welcome {user.name}</p>
            <p>Join a team to get started</p>
            <Page />
        </div>
        )
    }
    const team= await getTeamInfo(user.teamId)
    if(!team){
        return(
            <div>
                <h1>Dashboard</h1>
                <p>Welcome {user.name}</p>
                <p>Join a team to get started</p>
                <Page />
            </div>
            )
    }

    return renderTeamDashboard(user,team)//need to sort this
}

function renderTeamDashboard(user:{name:string},team:Team){
    return (
        <div>
        <h1>Dashboard</h1>
        <p>Welcome {user.name}</p>
        <p>Team Name: {team?.teamName}</p>
        <p>Team Code: {team?.teamCode}</p>
        <p>Description: {team?.description}</p>
        <p>Github Link: {team.gLink ? team.gLink : "Not set"}</p>
        <p>Figma Link: {team.fLink ? team.fLink : "Not set"}</p>
        <Form/>
        <Link href="/team/update">Update Team Info</Link>
       </div>
    )
}
