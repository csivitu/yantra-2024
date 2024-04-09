import { authOptions } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";


export async function PATCH(request: Request) {
    try {
        const { ideaDescription, ideaLink, track } = await request.json();
        const session = await getServerSession(authOptions);

        if (!session || !session.user || !session.user.name || !session.user.email) {
            return NextResponse.json({ message: "Invalid session or user" }, { status: 401 });
        }

        const user = await prisma.user.findFirst({
            where: { email: session.user.email },

        })
        if (!user) {
            return NextResponse.json({ message: "User not found" }, { status: 404 })
        }
        if (!user.teamId) {
            return NextResponse.json({ message: "User not part of a team" }, { status: 400 })
        }
        await prisma.team.update({
            where: {
                id: user.teamId,
            },
            data: {
                ideaDescription: ideaDescription,
                ideaLink: ideaLink,
                track: track,
            }

        })
        return NextResponse.json({ message: "Idea submitted successfully" }, { status: 200 })
    } catch (err) {
        //console.log(err);
        return NextResponse.json({ message: "Error" }, { status: 500 })
    }
}
