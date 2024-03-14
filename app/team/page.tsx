import Link from 'next/link'
import {getServerSession} from 'next-auth'
import {authOptions} from "@/lib/auth"
import {getUserInfo} from "@/lib/call"

export default async function Page(){
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
        return (
                <div>
                <h1>Team Builder</h1>
                <Link href="./team/create">Create Team</Link>
                <Link href="./team/join">Join Team</Link>
                </div>
               )
    } 
    return (
        <Link href="/dashboard">
        Go to Dashboard
        </Link>
    )
}
