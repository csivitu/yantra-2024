import { NextRequest, NextResponse } from "next/server"
import prisma from "@/lib/prisma"

export async function GET(req: NextRequest) {
  try {
    const page = parseInt(req.nextUrl.searchParams.get('page') || "0")
    const limit = parseInt(req.nextUrl.searchParams.get('limit') || "20")
    const eventName = req.nextUrl.searchParams.get('name') || null;
    const eventType = req.nextUrl.searchParams.get('type') || null;

    const events = await prisma.events.findMany({
      skip: page * limit,
      take: limit,
      where: {
        eventName: eventName ? { contains: eventName, mode: 'insensitive' } : undefined,
        eventType: eventType ? { contains: eventType, mode: 'insensitive' } : undefined
      }
    });

    return NextResponse.json({ events, message: "Events successfully fetched!" }, { status: 200 })
  }
  catch (e) {
    return NextResponse.json({ message: "Internal server error" }, { status: 500 })
  }
}

