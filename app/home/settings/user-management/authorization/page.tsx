import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { 
  TabsRoot,
  TabsList,
  TabsTrigger,
  TabsContent 
} from "@/components/ui/tabs";
import { 
  Building2, 
  DoorClosed, 
  Home, 
  Settings,
  FolderKanban, 
  NotebookPen,
  ArrowRightCircle 
} from "lucide-react";

import Link from "next/link";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Edit, File, Trash } from "lucide-react";
import { revalidatePath, unstable_noStore as noStore } from "next/cache";

export default async function DashboardPage() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <div className="grid items-start gap-8">

      <Card className="y-4">
        <CardHeader>
          <CardTitle>Authorization</CardTitle>
          <CardDescription>
            Efficiently manage user, roles, permissions, and access, ensuring secure and streamlined operations within your organization.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="container mx-auto p-4">
          <div className="flex h-full"> {/* Container for sidebar + content */}
            <TabsRoot className="flex w-full">
              <TabsList className="flex flex-col w-40 border-r"> {/* Sidebar */}
                <TabsTrigger value="tab1" className="p-4 hover:bg-gray-200 hover:text-primary">Assign Role</TabsTrigger>
                <TabsTrigger value="tab2" className="p-4 hover:bg-gray-200 hover:text-primary">Roles</TabsTrigger>
                <TabsTrigger value="tab3" className="p-4 hover:bg-gray-200 hover:text-primary">Permission</TabsTrigger>
                <TabsTrigger value="tab4" className="p-4 hover:bg-gray-200 hover:text-primary">Role Permission</TabsTrigger>
             
              </TabsList>
              <div className="flex-1 p-4"> {/* Content area */}
                <TabsContent value="tab1">
                  Content for Tab 1
                </TabsContent>
                <TabsContent value="tab2">
                  Content for Tab 2
                </TabsContent>
                <TabsContent value="tab3">
                  Content for Tab 3
                </TabsContent>
                <TabsContent value="tab4">
                  Content for Tab 4
                </TabsContent>
                {/* Add more content as needed */}
              </div>
            </TabsRoot>
          </div>
          </div>
        </CardContent>

      </Card>
      

    </div>
  );
}
