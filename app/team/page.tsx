'use client'
import Link from 'next/link'
import {useRouter} from 'next/navigation';
import {authOptions} from "@/lib/auth"
import {getServerSession} from  "next-auth"
import {prisma} from "@/lib/call"

export default function Page(){
    const router = useRouter()
    const session = getServerSession(authOptions)

    return (
        <div>
            <h1>Page Builder</h1>
            <Link href="./team/create">Create Team</Link>
            <Link href="./team/join">Join Team</Link>
        </div>
    )
}
