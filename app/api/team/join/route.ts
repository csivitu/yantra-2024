import {authOptions} from "@/lib/auth"
import {NextResponse} from "next/server"
import {getServerSession} from  "next-auth"
import {prisma} from "@/lib/call"
export async function POST(request:Request){
    try{
        //check if the user is already part of the team
        const {teamName, teamCode} = await request.json();
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
        const user = await prisma.user.findFirst({
            where: { name: session.user.name },
        })
        if(!user){
            return NextResponse.json({message:"User not found"})
        }
        if(user.teamName){
            return NextResponse.json({message:"User already part of a team"})
        }
        const team = await prisma.team.findFirst({
            where:{
                teamName: teamName,
            }
        })
        if(!team){
            return NextResponse.json({message:"Invalid team name"})
        }
        const userName = session.user.name;
        const teamMembers = await prisma.user.findMany({
            where:{
                teamName: teamName,
            }
        })
        if(teamMembers.length < 4){//number of existing team members should be less than 4

            if(teamCode === team.teamCode && userName !== team.userName && session.user.name){
                const userUpdate = await prisma.user.update({
                    where: {name: session.user.name},
                    data: {
                        teamName:teamName,
                    }
                }) 
                return NextResponse.json({message:"Team created successfully"})
            }
            else{
                return NextResponse.json({message:"Invalid team code or already part of the team"})
            }
        }
        else{
            return NextResponse.json({message:"Team full"})
        }
    } catch(err){
        //console.log(err);
        return NextResponse.json({message:"Error"})
    }
}
