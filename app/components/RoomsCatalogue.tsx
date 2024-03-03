"use client";

import * as React from "react";
import Image from "next/image"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Tabs } from "./Tab"
import { CalendarBooking } from "./CalendarBooking";

export function RoomsCatalogue() {

  return (

    <section>
      <div className="relative flex flex-col lg:flex-row justify-center h-95vh overflow-hidden lg:px-0 md:px-12">
        <div className="relative z-10 flex flex-col flex-1 px-4 py-10 bg-white shadow-2xl mt-10 lg:py-24 md:flex-none md:px-24 sm:justify-center">
          <Tabs />
        </div>
        <div className="relative lg:w-2/3 lg:block lg:relative sm:w-full">
          <div className="absolute inset-0 object-cover w-full h-full bg-white">
            <div className="flex flex-col mt-6 py-10 lg:mt-10 ">
              <Card className="relative w-max-95vh m-10">
                <CardHeader>
                  <CardTitle>February 2024</CardTitle>

                </CardHeader>
                <CardContent>
                  <CalendarBooking/>
                </CardContent>
              </Card>
            </div>

          </div>
        </div>
      </div>
    </section>

  );
}
