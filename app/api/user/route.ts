import { authOptions } from "@/lib/auth";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import prisma from "@/lib/prisma";

export async function PUT(request: Request) {
    try {
        const { githubProfile, linkedinProfile, projects, bio, otherProfile, phoneNum } = await request.json();
        const session = await getServerSession(authOptions);

        if (!session || !session.user || !session.user.name || !session.user.email) {
            return NextResponse.json({ message: "Invalid session or user" }, { status: 401 });
        }

        const user = await prisma.user.findFirst({
            where: { email: session.user.email },
        });

        if (!user) {
            return NextResponse.json({ message: "User not found" }, { status: 404 });
        }

        await prisma.user.update({
            where: { email: session.user.email },
            data: {
                githubProfile: githubProfile,
                linkedinProfile: linkedinProfile,
                projects: projects,
                bio: bio,
                otherProfile: otherProfile,
                phoneNum: phoneNum
            },
        })

        return NextResponse.json({ message: "User updated successfully" }, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "An error occurred" }, { status: 500 });
    }
}
export async function GET() {
    try {
        const session = await getServerSession(authOptions);

        if (!session || !session.user || !session.user.name || !session.user.email) {
            return NextResponse.json({ message: "Invalid session or user" }, { status: 401 });
        }

        const user = await prisma.user.findFirst({
            where: { email: session.user.email },
            include: {
                team: true
            }
        });

        if (!user) {
            return NextResponse.json({ message: "User not found" }, { status: 404 });
        }

        return NextResponse.json({ user }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
}
