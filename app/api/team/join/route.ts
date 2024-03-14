
import { authOptions } from "@/lib/auth";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { prisma } from "@/lib/call";

export async function POST(request:Request) {
    try {
        const { teamName, teamCode } = await request.json();
        const session = await getServerSession(authOptions);

        if (!session || !session.user || !session.user.name) {
            return NextResponse.json({ message: "Invalid session or user" });
        }

        const user = await prisma.user.findFirst({ where: { name: session.user.name }, });

        if (!user) {
            return NextResponse.json({ message: "User not found" });
        }

        if (user.teamId) {
            return NextResponse.json({ message: "User already part of a team" });
        }

        const team = await prisma.team.findFirst({
            where: { teamName: teamName },
        });

        if (!team) {
            return NextResponse.json({ message: "Invalid team name" });
        }

        const userName = session.user.name;
        const teamMembers = await prisma.team.findMany({
            where: { teamName: teamName },
            include: { users: true },
        });

        console.log(teamMembers);

       // if (teamMembers.length < 4) {
       //     // Number of existing team members should be less than 4

       //     if (teamCode === team.teamCode && userName !== team.userName && session.user.name) {
       //         const userUpdate = await prisma.user.update({
       //             where: { name: session.user.name },
       //             data: { teamId: teamName },
       //         });

       //         return NextResponse.json({ message: "Team created successfully" });
       //     } else {
       //         return NextResponse.json({ message: "Invalid team code or already part of the team" });
       //     }
       // } else {
       //     return NextResponse.json({ message: "Team full" });
        //}
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "Error" });
    }
}

