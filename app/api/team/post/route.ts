
import { authOptions } from "@/lib/auth";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { prisma, generateInviteCode } from "@/lib/call";

export async function POST(request:Request) {
    try {
        const inviteCode = generateInviteCode();
        const { teamName, description } = await request.json();
        const session = await getServerSession(authOptions);

        if (!session || !session.user || !session.user.name) {
            return NextResponse.json({ message: "Invalid session or user" });
        }

        const user = await prisma.user.findFirst({
            where: { name: session.user.name },
        });

        if (!user) {
            return NextResponse.json({ message: "User not found" });
        }

        if (user.teamId) {
            return NextResponse.json({ message: "User already part of a team" });
        }

        await prisma.team.create({
            data: {
                teamName: teamName,
                description: description,
                teamCode: inviteCode,
                createdBy: { connect: { name: session.user.name } },
            },
        });

        await prisma.user.update({
            where: { name: session.user.name },
            data: {
                teamId: teamName,
            },
        });

        return NextResponse.json({ message: "Team created successfully" });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "An error occurred" });
    }
}

