// pages/api/rooms.ts

import { NextRequest, NextResponse } from 'next/server';
import { unstable_noStore as noStore } from "next/cache";
import prisma from "@/app/lib/db";

export async function POST(request: NextRequest) {
    try {
    const { 
        nameCustomer, 
        emailCustomer, 
        phoneCustomer, 
        companyCustomer,
        orderStatus,
        category,
        userId
        
    } = await request.json();

    debugger;
    const newOrder = 
    await prisma.order.create({
        data: {
            nameCustomer: nameCustomer,
            emailCustomer: emailCustomer,
            phoneCustomer: phoneCustomer,
            companyCustomer: companyCustomer,
            orderStatus: orderStatus,
            category: category,
            userId: userId,
        },
    });

    return NextResponse.json(newOrder);
    } catch (error) {
        console.error('Error processing the request:', error);
        return NextResponse.error();
    }
  }
