import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { SubmitButton } from "@/app/components/Submitbuttons";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
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
          <div className="container mx-auto">
            <TabsRoot className="flex flex-col" defaultValue="tab1">
              <TabsList className="flex space-x-1 p-1"> 
                <TabsTrigger value="tab1" 
                className="flex py-2 hover:bg-gray-200 hover:text-primary">
                  User Role
                </TabsTrigger>
                <TabsTrigger value="tab2" 
                className="flex py-2 hover:bg-gray-200 hover:text-primary">
                  Role Permission
                </TabsTrigger>
              </TabsList>
              <TabsContent value="tab1" className="p-4">
                <Card>
                  {/* <form action={postData}> */}
                  <form>
                    <CardHeader>
                      <CardTitle>User Role</CardTitle>
                      <CardDescription>
                        Assign role(s) to user
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-y-5">
                      <div className="flex flex-col">
                        <Label>User</Label>
                        <Input
                          required
                          type="text"
                          name="name"
                          placeholder="Username"
                        />
                      </div>

                      <div className="flex flex-col">
                        <Label>Role</Label>
                        <Input
                          required
                          type="text"
                          name="role"
                          placeholder="Role of user"
                        />
                      </div>

                      
                    </CardContent>

                    <CardFooter className="flex justify-between">
                      <Button asChild variant="destructive">
                        <Link href="/home/customer">Cancel</Link>
                      </Button>
                      <SubmitButton />
                    </CardFooter>
                  </form>
                </Card>
              </TabsContent>
              <TabsContent value="tab2" className="p-4">
                Content for Tab 2
              </TabsContent>
            </TabsRoot>
          </div>
        </CardContent>

      </Card>
      

    </div>
  );
}
