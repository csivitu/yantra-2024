import Link from 'next/link'
export default function Page(){
    return (
        <div>
            <h1>Page Builder</h1>
            <Link href="./team/create">Create Team</Link>
            <Link href="./team/join">Join Team</Link>
        </div>
    )
}
