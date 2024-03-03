"use client";

import * as React from "react";
import Image from "next/image"

import { Tabs } from "./Tab"
import Background from "../../public/bg-login.jpg"

export function Login() {

  return (
    
    <section>
    <div className="relative flex justify-center h-95vh overflow-hidden lg:px-0 md:px-12">
      <div className="relative z-10 flex flex-col flex-1 px-4 py-10 bg-white shadow-2xl mt-10 lg:py-24 md:flex-none md:px-24 sm:justify-center ">
        <Tabs/>
      </div>
      <div className="hidden bg-white lg:block lg:w-2/3  lg:relative sm:contents">
        <div className="absolute inset-0 object-cover w-full h-full bg-white">
          <Image className="object-center w-full h-auto bg-gray-200" src={Background} alt="" width="1310" height="873"/>
        </div>
      </div>
      
    </div>
  </section>

  );
}
