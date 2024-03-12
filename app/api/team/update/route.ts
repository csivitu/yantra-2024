import {authOptions} from "@/lib/auth"
import {NextResponse} from "next/server"
import {getServerSession} from  "next-auth"
import {prisma} from "@/lib/call"

export async function PUT(request:Request){
    try{
        const {description, gLink, fLink, dLink} = await request.json();
        const session = await getServerSession(authOptions);
        if (!session) {
            return NextResponse.json({message:"Session not found"})
        }
        if (!session.user){
            return NextResponse.json({message:"User not found"})
        }
        if(!session.user.name){
            return NextResponse.json({message:"User not found"})
        }
        const  user= await prisma.user.findFirst({
            where: {name: session.user.name},

        })
        const teamName = user?.teamName;
        if(!teamName){
            return NextResponse.json({message:"You are not authorized to perform this action"})
        }
        const response = await prisma.team.update({
            where:{
                teamName: teamName,
            },
            data:{
                description: description,
                gLink: gLink,
                fLink: fLink,
                dLink: dLink
            }
        })
        return NextResponse.json({message:"Team created successfully"})
    } catch(err){
        //console.log(err);
        return NextResponse.json({message:"Error"})
    }
}
