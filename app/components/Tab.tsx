"use client";

import * as React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  TabsRoot,
  TabsList,
  TabsTrigger,
  TabsContent
} from "@/components/ui/tabs";

export function Tabs() {

  return (
    <section>
      <TabsRoot className="w-full lg:p-6 max-auto" defaultValue="tab1">
        <TabsList className="flex justify-start gap-3 text-sm text-gray-600">
          <TabsTrigger value="tab1" className="inline-block py-2 font-medium bg-white border-b-2 border-yellow-500 hover:bg-yellow-500 hover:text-black">
            Tenant
          </TabsTrigger>
          <TabsTrigger value="tab2" className="inline-block py-2 font-medium bg-white border-b-2 border-yellow-500 hover:bg-yellow-500 hover:text-black">
            Meeting Room
          </TabsTrigger>
        </TabsList>

        <TabsContent value="tab1" className="p-4">
          <div className="w-full max-w-md mx-auto md:max-w-sm md:px-0 md:w-92 sm:px-4">

            <form>
              <div className="mt-4 space-y-6">
                <div>
                  <label className="block mb-3 text-sm font-medium text-gray-600" >
                    First name
                  </label>
                  <input className="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-yellow-500 focus:outline-none focus:ring-yellow-500 sm:text-sm" placeholder="Your name" />
                </div>
                <div className="col-span-full">
                  <label className="block mb-3 text-sm font-medium text-gray-600" >
                    What is the name of your company / organisation?
                  </label>
                  <input className="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-yellow-500 focus:outline-none focus:ring-yellow-500 sm:text-sm" placeholder="Company name" />
                </div>
                <div className="col-span-full">
                  <label className="block mb-3 text-sm font-medium text-gray-600" >
                    Email
                  </label>
                  <input className="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-yellow-500 focus:outline-none focus:ring-yellow-500 sm:text-sm" placeholder="email@example.com" type="email" />
                </div>
                <div className="col-span-full">
                  <label className="block mb-3 text-sm font-medium text-gray-600" >
                    Phone Number
                  </label>
                  <input className="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-yellow-500 focus:outline-none focus:ring-yellow-500 sm:text-sm" placeholder="+62 ..." type="phone" />
                </div>

                <div className="col-span-full">
                  <button className="items-center justify-center w-full px-6 py-2.5 text-center text-black duration-200 bg-yellow-500  rounded-full nline-flex hover:bg-black  hover:border-black hover:text-white focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black" type="submit">
                    Next
                  </button>
                </div>
              </div>
            </form>
          </div>
        </TabsContent>
        <TabsContent value="tab2" className="p-4">
          <form>
            <div className="mt-4 space-y-6">
              <div className="col-span-full">
                <label className="block mb-3 text-sm font-medium text-gray-600" >
                  What is the name of your company / organisation?
                </label>
                <input className="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-yellow-500 focus:outline-none focus:ring-yellow-500 sm:text-sm" placeholder="Company name" />
              </div>
              <div className="col-span-full">
                <label className="block mb-3 text-sm font-medium text-gray-600" >
                  Email
                </label>
                <input className="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-yellow-500 focus:outline-none focus:ring-yellow-500 sm:text-sm" placeholder="email@example.com" type="email" />
              </div>
              <div className="col-span-full">
                <label className="block mb-3 text-sm font-medium text-gray-600" >
                  Phone Number
                </label>
                <input className="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-yellow-500 focus:outline-none focus:ring-yellow-500 sm:text-sm" placeholder="+62 ..." type="phone" />
              </div>
              <div className="col-span-full">
                <label className="block mb-3 text-sm font-medium text-gray-600">
                  Select Date and Time
                </label>
                <input
                  className="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-yellow-500 focus:outline-none focus:ring-yellow-500 sm:text-sm"
                  type="datetime-local"
                />
              </div>


              <div className="col-span-full">
                <button className="items-center justify-center w-full px-6 py-2.5 text-center text-black duration-200 bg-yellow-500  rounded-full nline-flex hover:bg-black  hover:border-black hover:text-white focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black " type="submit">
                  Go to Room Catalogue
                </button>
              </div>
            </div>
          </form>
        </TabsContent>
      </TabsRoot>
    </section>
  );
}
