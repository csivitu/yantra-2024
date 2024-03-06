import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

export default async function ProfilePage() {
    const session = await getServerSession(authOptions);
    if (session) {
        console.log(session)
    }


    return (
        <><div>
            {session?.user?.name}
            {session?.user?.email}
            {session?.user?.image}
            </div>
        </>
    );
}