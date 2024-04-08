'use client'
import { getSession, signIn } from "next-auth/react"; // Import the signIn function from NextAuth for authentication.
import Link from "next/link";
import { useEffect } from "react";


export default function LoginPage() {
    //    if (session) {
    //        console.log(session)
    //    }
   

    useEffect(() => {
        const fetchData = async () => {
            const session = await getSession();
            if (session) {
                console.log(session.user)
            }
        }
        fetchData()
    }, [])

    const callbackUrl = "/team"; // Define a callback URL or use a default one.

    return (
        <>
            <Link
                href="/login"
                onClick={() =>
                    signIn("google", { callbackUrl })
                }
                className=" border-2 border-black px-8 py-2 text-left text-2xl"
            >Login</Link>
        </>
    );
}
