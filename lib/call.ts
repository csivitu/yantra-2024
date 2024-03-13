import  { PrismaClient } from "@prisma/client";
import {v4 as uuidv4} from "uuid"
export const prisma = new PrismaClient();
export function generateInviteCode(){
    return uuidv4().replace(/-/g, '').substring(0, 6).toUpperCase();//generates a 6 digit code 
}

export async function getUserInfo(name:string){
    const user = await prisma.user.findFirst({
        where:{
            name:name
        }
    });
    return user;
}
export async function getTeamInfo(teamName:string){
    const team = await prisma.team.findFirst({
        where:{
            teamName:teamName
        }
    });
    //console.log(team)
    return team;
}
export type Team = {
    id         : string   
    teamName   : string   
    teamCode   : string   
    description: string | null
    createdAt  : Date 
    updatedAt  : Date 
    gLink      : string | null
    fLink      : string | null
    dLink      : string | null
    userName   : string | null
}
