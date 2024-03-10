"use client";

import * as React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  TabsRoot,
  TabsList,
  TabsTrigger,
  TabsContent
} from "@/components/ui/tabs";
import { TabTenant  } from "./TabTenant";
import { TabMeetingRoom  } from "./TabMeetingRoom";

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
          <TabTenant/>
        </TabsContent>
        <TabsContent value="tab2" className="p-4">
          <TabMeetingRoom />
        </TabsContent>
      </TabsRoot>
    </section>
  );
}
