import { v4 as uuidv4 } from "uuid"
import prisma from "./prisma";

export function generateInviteCode() {
    return uuidv4().replace(/-/g, '').substring(0, 6).toUpperCase();
}

export async function getUserInfo(name: string) {
    const user = await prisma.user.findFirst({
        where: {
            name: name
        }
    });
    return user;
}

export async function getTeam(teamName: string) {
    const team = await prisma.team.findFirst({
        where: {
            teamName: teamName
        }
    });
    return team;
}
