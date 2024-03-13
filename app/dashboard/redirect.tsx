'use client'
import {useRouter} from 'next/navigation'
export default function Page(){
    const router = useRouter()
    return (
    <div>
        <span onClick={()=>{
            router.push("/team")
            router.refresh()
        }}>Join/Create Team
        </span>
    </div>
    )
}

