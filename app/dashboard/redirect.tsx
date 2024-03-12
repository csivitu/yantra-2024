'use client'
import {useRouter} from 'next/navigation'
export default function LoginPage(){
    const router = useRouter()
    return (
    <div>
        <h1>Dashboard</h1>
        <p>You are not logged in</p>
        <span onClick={()=>{
            router.push("/team")
            router.refresh()
        }}>Join/Create Team
        </span>
    </div>
    )
}

