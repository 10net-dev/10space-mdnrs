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
  Building2, 
  DoorClosed, 
  Home, 
  Settings,
  FolderKanban, 
  NotebookPen,
  ArrowRightCircle 
} from "lucide-react";

import Link from "next/link";
import prisma from "../lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Edit, File, Trash } from "lucide-react";
import { unstable_noStore as noStore } from "next/cache";

async function getData(userId: string) {
  noStore();
  const data = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    select: {
      Notes: {
        select: {
          title: true,
          id: true,
          description: true,
          createdAt: true,
        },
        orderBy: {
          createdAt: "desc",
        },
      },

      Subscription: {
        select: {
          status: true,
        },
      },
    },
  });

  return data;
}

export default async function DashboardPage() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  const data = await getData(user?.id as string);

  const cardData = [
    { title: 'Project', stats:42, icon:Building2, href:"/home/project"},
    { title: 'Customer', stats:3, icon:FolderKanban, href:"/home/customer"},
    { title: 'Vendor', stats:7, icon:FolderKanban, href:"/home/vendor" },
    { title: 'Sales', stats:7, icon:Building2, href:"/home/sales" },
    { title: 'Leads',  stats:71, icon:FolderKanban, href:"/home/leads" },
    { title: 'Procurement',  stats:8, icon:FolderKanban, href:"/home/procurement" },
    
  ];
  return (
    <div className="grid items-start gap-8">
      {/* <div className="flex items-center justify-between px-2">
        <div className="grid gap-1">
          <h1 className="text-3xl md:text-4xl">Settings</h1>
          <p className="text-lg text-muted-foreground">Your Profile settings</p>
        </div>
      </div> */}

      <Card>
        <CardHeader>
          <CardTitle>Dashboard</CardTitle>
          <CardDescription>
            Unlock insights with real-time stats 
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="container mx-auto p-4">
            <div className="grid md:grid-cols-3 gap-4">
              {cardData.map((card, index) => (

                <div className="flex shadow-lg border rounded-lg overflow-hidden m-6">
                  <div className="bg-primary p-4 flex items-center justify-center">
                    <card.icon className="h-8 w-8 text-white" /> 
                  </div>
                  {/* Stats and title container */}
                  <div className="p-4  flex flex-col justify-between">
                    <span className="text-2xl font-bold">{card.stats}</span> {/* Number of stats */}
                    <span className="text-lg">{card.title}</span> {/* Title of stats */}
                  </div>
                </div>

              ))}
            </div>
          </div>
        </CardContent>

        <CardFooter>
          
        </CardFooter>
      </Card>

      <Card className="y-4">
        <CardHeader>
          <CardTitle>Submenu</CardTitle>
          <CardDescription>
            Subtitle of submenu
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="container mx-auto p-4">
            <div className="grid md:grid-cols-3 gap-4">
              {cardData.map((card, index) => (

                  <div className="flex shadow-lg border rounded-lg overflow-hidden m-6">
                    <div className="flex-none p-4 flex items-center justify-center">
                      <card.icon className=" h-8 w-8" />
                    </div>

                    <div className="flex-grow p-4 flex flex-col justify-center">
                      <span className="text-lg font-bold">{card.title}</span>
                      <span className="text-sm">Lorem ipsum dolor sit amet</span> {/* Subtitle */}
                    </div>

                    <Link href={card.href} className="flex-none bg-primary p-4 flex items-center justify-center">
                        <ArrowRightCircle className="text-white h-6 w-6" />
                    </Link>
                  </div>

              ))}
            </div>
          </div>
        </CardContent>

      </Card>
      
      <div className="container mx-auto p-0 mb-4">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Table</CardTitle>
                <CardDescription>
                  Components of table
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-200">
                      <tr>
                        <th scope="col" className="px-6 py-3">Icon</th>
                        <th scope="col" className="px-6 py-3">Name</th>
                        <th scope="col" className="px-6 py-3">Status</th>
                        <th scope="col" className="px-6 py-3">Value</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cardData.map((card, index) => (
                        <tr key={index} className="border-b hover:bg-gray-50">
                          <td className="px-6 py-4"><card.icon className=" h-8 w-8" /></td>
                          <td className="px-6 py-4">{card.title}</td>
                          <td className="px-6 py-4">
                            <span className="bg-yellow-400 text-yellow-800 text-xs px-3 py-1 rounded-full">
                              In Progress
                            </span>
                          </td>
                          <td className="px-6 py-4">{card.stats}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
          <div>
            <Card>
              <CardHeader>
                <CardTitle>List</CardTitle>
                <CardDescription>
                  Components of list
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-y-4">
                {cardData.map((card, index) => (
                  <Card key={index} className="flex items-center justify-between p-4">
                    <div className="flex items-center gap-x-4">
                      <Button variant="outline" size="icon">
                          <card.icon className="w-4 h-4" />
                      </Button>
                      <h2 className="font-semibold text-lg">
                        {card.title}
                      </h2>
                    </div>

                    <div className="flex gap-x-4">
                      <Link href="/home">
                        <Button variant="outline" size="icon">
                          <Edit className="w-4 h-4" />
                        </Button>
                      </Link>
                    </div>
                  </Card>
                ))}
                  
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      

    </div>
  );
}
