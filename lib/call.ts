import  { PrismaClient } from "@prisma/client";
import {v4 as uuidv4} from "uuid"
export const prisma = new PrismaClient();
export function generateInviteCode(){
    return uuidv4().replace(/-/g, '').substring(0, 6).toUpperCase();//generates a 6 digit code 
}

