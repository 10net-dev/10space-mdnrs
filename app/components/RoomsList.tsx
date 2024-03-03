"use client";

import * as React from "react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Steps } from "./Steps";

import Room1 from "../../public/room-1.png"
import Room2 from "../../public/room-2.png"

export function RoomsList() {

  const rooms = [
    { name: "Anantara", category: "Meeting Room", capacity: "200", image:"../../public/room-1.png"},
    { name: "Anantara 1", category: "Meeting Room", capacity: "200", image:"../../public/room-1.png"},
    { name: "Anantara 2", category: "Meeting Room", capacity: "200", image:"../../public/room-1.png"},
    { name: "Anantara 3", category: "Meeting Room", capacity: "200", image:"../../public/room-1.png"},
    { name: "Aryanusa", category: "Ballroom", capacity: "10-20", image:"../../public/room-2.png"},
    { name: "Aryanusa 1", category: "Ballroom", capacity: "10-20", image:"../../public/room-2.png"},
    { name: "Aryanusa 2", category: "Ballroom", capacity: "10-20", image:"../../public/room-2.png"},
    { name: "Urban", category: "Ballroom", capacity: "10-20", image:"../../public/room-2.png"},
    { name: "Energy", category: "Ballroom", capacity: "10-20", image:"../../public/room-2.png"},
    { name: "Port", category: "Ballroom", capacity: "10-20", image:"../../public/room-2.png"},
    { name: "Bridge", category: "Ballroom", capacity: "10-20", image:"../../public/room-2.png"}
  ]

  return (
    <section>
      <div className="relative flex flex-col lg:flex-row justify-center h-95vh overflow-hidden lg:px-0 md:px-12">
        <div className="h-full px-4 py-10 bg-white  mt-10 lg:py-20 md:flex-none md:px-15 sm:justify-center max-w-2xl">
          <div className="hidden lg:block max-w-2xl h-full ">
            <Steps />
          </div>
        </div>
        <div className="flex-1 overflow-y-auto object-cover w-full h-full bg-white">
          <div className="flex flex-col mt-6 py-10 lg:mt-10 ">

            <div className="p-6 ">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">

                {rooms.map((room) => (
                  <div className="overflow-hidden rounded-2xl bg-gray-50">
                    <div className="flex items-center h-[180px] overflow-hidden">
                      <Image src={Room1} alt="Meeting Room"/>
                    </div>

                    <div className="p-6">
                      <div className="flex flex-col items-start justify-between sm:flex-row sm:items-center">
                        <div>
                          <p className="text-gray-400">{room.category}</p>
                          <h2 className="mt-2 text-lg font-semibold text-gray-800">{room.name}</h2>
                        </div>
                        <Button className="bg-yellow-600">Book Now</Button>
                      </div>

                      <hr className="mt-4 mb-4" />

                      <div className="flex flex-wrap justify-between">
                        <p className="inline-flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className=" h-5 w-5 stroke-yellow-600 lucide lucide-users"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>

                          <span className="ml-2 text-gray-600">{room.capacity}</span>
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
