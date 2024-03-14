import { authOptions } from "@/lib/auth"
import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { generateInviteCode } from "@/lib/call"
import prisma from "@/lib/prisma";

//create team
export async function POST(request: Request) {
    try {
        const inviteCode = generateInviteCode();
        const { teamName, description } = await request.json();
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

        if (user.teamId) {
            return NextResponse.json({ message: "User already part of a team" }, { status: 400 });
        }

        const team = await prisma.team.create({
            data: {
                teamName: teamName,
                description: description,
                teamCode: inviteCode,
                createdBy: { connect: { email: session.user.email } },
            },
        });
        await prisma.user.update({
            where: { email: session.user.email },
            data: {
                teamId: team.id,
            },
        });

        return NextResponse.json({ message: "Team created successfully" }, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "An error occurred" }, { status: 500 });
    }
}

export async function GET(request: Request) {
    try {
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
        if (!user.teamId) {
            return NextResponse.json({ message: "User not part of a team" }, { status: 404 });
        }
        const team = await prisma.team.findFirst({
            where: { id: user.teamId },
            include: { users: true },
        });
        return NextResponse.json(team, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Internal server error" }, { status: 500 });

    }
}

//join team
export async function PUT(request: Request) {
    try {
        const { teamCode } = await request.json();
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

        if (user.teamId) {
            return NextResponse.json({ message: "User already part of a team" }, { status: 400 });
        }

        const team = await prisma.team.findFirst({
            where: { teamCode: teamCode },
            include: { users: true },
        });

        if (!team) {
            return NextResponse.json({ message: "Invalid team name" }, { status: 400 });
        }
        if (team.id === user.teamId) {
            return NextResponse.json({ message: "User already part of this team" }, { status: 400 })
        }

        const teamMembersCount = team.users.length;

        if (teamMembersCount >= 4) {
            return NextResponse.json({ message: "Team full" }, { status: 400 });
        }

        if (teamCode !== team.teamCode) {
            return NextResponse.json({ message: "Invalid team code" }, { status: 400 });
        }

        await prisma.user.update({
            where: { email: session.user.email },
            data: { teamId: team.id },
        });

        return NextResponse.json({ message: "Team joined successfully" }, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "Error" });
    }
}

//update team details
export async function PATCH(request: Request) {
    try {
        const { description, githubLink, figmaLink } = await request.json();
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
                description: description,
                githubLink: githubLink,
                figmaLink: figmaLink,
            }

        })
        return NextResponse.json({ message: "Team updated successfully" }, { status: 200 })
    } catch (err) {
        //console.log(err);
        return NextResponse.json({ message: "Error" }, { status: 500 })
    }
}

//leave team
export async function DELETE() {
    try {
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
        await prisma.user.update({
            where: { email: session.user.email },
            data: {
                teamId: null,
            }
        })
        await prisma.team.update({
            where: { id: user.teamId },
            data: {
                users: {
                    disconnect: {
                        name: session.user.name
                    }
                }
            }

        })
        return NextResponse.json({ message: "User removed from the team" }, { status: 200 })

    }
    catch (err) {
        return NextResponse.json({ message: "Error" }, { status: 500 })
    }
}
