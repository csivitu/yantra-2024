'use client'
import {useRouter} from 'next/navigation'
export default function Page(){
    const router = useRouter()
    return (
        <span onClick={()=>{
            router.push("/team")
            router.refresh()
        }}>Join Team
        </span>
    )

}

