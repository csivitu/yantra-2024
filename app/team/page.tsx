'use client'
import Link from 'next/link'

export default function Page(){
    return (
        <div>
            <h1>Team Builder</h1>
            <Link href="./team/create">Create Team</Link>
            <Link href="./team/join">Join Team</Link>
        </div>
    )
}
