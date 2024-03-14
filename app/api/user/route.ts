import { authOptions } from "@/lib/auth";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { prisma } from "@/lib/call";

export async function PUT(request:Request){
    try {
        const {githubProfile, linkedinProfile, projects, bio} = await request.json();
        const session = await getServerSession(authOptions);

        if (!session || !session.user || !session.user.name) {
            return NextResponse.json({ message: "Invalid session or user" },{status:401});
        }

        const user = await prisma.user.findFirst({
            where: { name: session.user.name },
        });

        if (!user) {
            return NextResponse.json({ message: "User not found" },{status:404});
        }

        await prisma.user.update({
            where: { name: session.user.name },
            data: {
                githubProfile: githubProfile,
                linkedinProfile: linkedinProfile,
                projects: projects,
                bio: bio
            },
        
        })

        return NextResponse.json({ message: "Team updated successfully" },{status:200});
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "An error occurred" },{status:500});
    }
}
export async function GET(){
    try {
        const session = await getServerSession(authOptions);

        if (!session || !session.user || !session.user.name) {
            return NextResponse.json({ message: "Invalid session or user" },{status:401});
        }

        const user = await prisma.user.findFirst({
            where: { name: session.user.name },
        });

        if (!user) {
            return NextResponse.json({ message: "User not found" },{status:404});
        }

        return NextResponse.json({ user },{status:200});
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "An error occurred" },{status:500});
    }
}
