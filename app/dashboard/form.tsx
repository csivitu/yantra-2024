'use client'
import {FormEvent} from 'react'
import {useRouter} from 'next/navigation'

export default function Form(){
    const router = useRouter()
    const handleSubmit = async (e:FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        new FormData(e.currentTarget)
        await fetch(`/api/team/delete`,{
            method:'POST',     
            headers:{
                'Content-Type':'application/json',
            },
            
        })
        router.push('/dashboard')
        router.refresh()
    }
    return(
    <form onSubmit={handleSubmit}>
    <button type="submit">Leave Team</button>
    </form>
    )
}
