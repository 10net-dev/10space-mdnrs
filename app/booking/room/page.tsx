"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import { revalidatePath, unstable_noStore as noStore } from "next/cache";

import {
  ChevronsRight,
  ChevronRight,
  ChevronsLeft,
  Home
} from "lucide-react";

import prisma from "../../lib/db";

import { Button } from "@/components/ui/button";

import RoomDefault from "../../../public/room-1.png"

export function Rooms() {

  const [roomData, setRoomData] = useState<string[]>([]);
  const fetchRoomData = async () => {
    try {
      debugger
      const response = await fetch(`${window.location.origin}/api/rooms`);
      if (response.ok) {
        const roomData = await response.json();
        console.log(roomData)
        setRoomData(roomData);
      } else {
        console.error('Failed to fetch data:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }


  };


  useEffect(() => {

    fetchRoomData();

    const snapScript: string = "https://app.sandbox.midtrans.com/snap/snap.js"
    const clientKey: any = process.env.MIDTRANS_PUBLIC_CLIENT_DEV

    const script = document.createElement('script')
    script.src = snapScript

    script.setAttribute("data-client-key", clientKey)
    script.async = true

    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, []);

  const product = {
    id: "room_md_006",
    name: "room_aryanusa",
    price: 350000,
    quantity: 1
  }

  const checkout = async () => {
    const data = {
      id: product.id,
      productName: product.name,
      price: product.price,
      quantity: product.quantity,
    }

    try {
      const response = await fetch('/api/tokenizer', {
        method: 'POST',
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
      }

      const responseData = await response.json()

      if (!responseData || !responseData.token) {
        throw new Error('Invalid response data')
      }

      ; (window as any).snap.pay(responseData.token)
      console.log(responseData)
    } catch (error: any) {
      console.error('Error during checkout:', error.message)
      // Handle the error as needed
    }
  }

  return (
    <section>
      <div className="relative flex flex-col lg:flex-row justify-center h-95vh overflow-hidden lg:px-0 md:px-12">
        <div className="h-full px-4 bg-white  mt-10 lg:py-20 md:flex-none md:px-15 sm:justify-center max-w-2xl">
          {/* <div className="hidden lg:block max-w-2xl h-full ">
            <Steps />
          </div> */}
        </div>
        <div className="flex-1 overflow-y-auto object-cover w-full h-full bg-white">
          <div className="flex flex-col py-8 lg:mt-12 ">

            <section>

              <div className="p-6 max-w">
                <div className="justify-center w-full mx-auto">
                  <nav className="flex py-3" aria-label="Breadcrumb">
                    <ol role="list" className="flex items-center space-x-4">
                      <li>
                        <div className="flex items-center">
                          <a href="/" className="inline-flex items-center text-sm font-medium text-gray-500 duration-200 hover:text-gray-700 hover:scale-95">
                            <Home className="flex-shrink-0 w-5 h-5 text-gray-300 md hydrated" />
                            <span className="ml-4">
                              Fill Form
                            </span>
                          </a>
                        </div>
                      </li>
                      <li>
                        <div className="flex items-center">
                          <ChevronRight className="flex-shrink-0 w-5 h-5 text-gray-300" />
                          <a href="#" className="ml-4 text-sm font-medium text-blue-500 hover:scale-95 hover:text-gray-700">
                            Select Room
                          </a>
                        </div>
                      </li>
                      <li>
                        <div className="flex items-center">
                          <ChevronRight className="flex-shrink-0 w-5 h-5 text-gray-300" />
                          <a href="#" className="ml-4 text-sm font-medium text-gray-500 hover:scale-95 hover:text-gray-700">
                            Payment
                          </a>
                        </div>
                      </li>
                      <li>
                        <div className="flex items-center">
                          <ChevronRight className="flex-shrink-0 w-5 h-5 text-gray-300" />
                          <a href="#" className="ml-4 text-sm font-medium text-gray-500 hover:scale-95 hover:text-gray-700" aria-current="page">
                            Receipt
                          </a>
                        </div>
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </section>


            <div className="p-6 ">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4">

                {roomData?.map((room) => (
                  // {rooms.map((room) => (
                  <div className="overflow-hidden rounded-2xl bg-gray-50">
                    <div className="flex items-center h-[180px] overflow-hidden">
                      <Image src={RoomDefault} alt="Meeting Room" />
                    </div>

                    <div className="p-6">
                      <div className="flex flex-col items-start justify-between sm:flex-row sm:items-center">
                        <div>
                          <p className="text-gray-400">{room?.type}</p>
                          <h2 className="mt-2 text-lg font-semibold text-gray-800">{room?.name}</h2>
                        </div>
                        <Button className="bg-yellow-600" onClick={checkout}>Book Now</Button>
                      </div>

                      <hr className="mt-4 mb-4" />

                      <div className="flex flex-wrap justify-between">
                        <p className="inline-flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className=" h-5 w-5 stroke-yellow-600 lucide lucide-users"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>

                          <span className="ml-2 text-gray-600">{room?.capacity}</span>
                        </p>

                        <p className="inline-flex items-center text-gray-600">
                          {/* right footer */}
                        </p>
                      </div>
                    </div>
                  </div>

                ))}

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
