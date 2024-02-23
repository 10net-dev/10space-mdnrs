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
  FolderKanban, 
  FolderLock,
  UserCheck,
  ArrowRightCircle 
} from "lucide-react";

import Link from "next/link";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Edit, File, Trash } from "lucide-react";
import { revalidatePath, unstable_noStore as noStore } from "next/cache";

export default async function DashboardPage() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  const cardRole = [
    { title: 'Role', icon:FolderLock, href:"/home/settings/master/role"},
    { title: 'Permission', icon:UserCheck, href:"/home/settings/master/permission"}
  ];

  const cardData = [
    { title: 'Project', stats:42, icon:Building2, href:"/home/master/project"},
    { title: 'Customer', stats:3, icon:FolderKanban, href:"/home/master/customer"},
    { title: 'Vendor', stats:7, icon:FolderKanban, href:"/home/master/vendor" }
  ];

  return (
    <div className="grid items-start gap-8">
      <Card className="y-4">
        <CardHeader>
          <CardTitle>Master Role</CardTitle>
          <CardDescription>
            Manage Role Configuration
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="container mx-auto p-4">
            <div className="grid md:grid-cols-3 gap-4">
              {cardRole.map((card, index) => (

                  <div className="flex shadow-lg border rounded-lg overflow-hidden m-6">
                    <div className="flex-none p-4 flex items-center justify-center">
                      <card.icon className=" h-8 w-8" />
                    </div>

                    <div className="flex-grow p-4 flex flex-col justify-center">
                      <span className="text-lg font-bold">{card.title}</span>
                      <span className="text-sm ">Lorem ipsum dolor sit amet</span> {/* Subtitle */}
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

      <Card className="y-4">
        <CardHeader>
          <CardTitle>Master Data</CardTitle>
          <CardDescription>
            Manage and access all core datasets
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
                      <span className="text-sm ">Lorem ipsum dolor sit amet</span> {/* Subtitle */}
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
      

    </div>
  );
}
