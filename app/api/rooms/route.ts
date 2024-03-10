// pages/api/rooms.ts

import { NextRequest, NextResponse } from 'next/server';
import { unstable_noStore as noStore } from "next/cache";
import prisma from "@/app/lib/db";

async function getData() {
    noStore();
    const data = await prisma.room.findMany({
        where: {
        isActive: true,
    },
    select: {
        id: true,
        name: true,
        description: true,
        type: true,
        area: true,
        capacity: true,
        createdAt: true,
    },
    orderBy: {
        createdAt: "desc",
    },
    });
  
    return data;
  }

  export async function GET (request: NextRequest){
    const data = await getData();
    
    return NextResponse.json(data);
}
