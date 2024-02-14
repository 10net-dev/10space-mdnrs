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
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Edit, File, Trash } from "lucide-react";
import { revalidatePath, unstable_noStore as noStore } from "next/cache";

export default async function DashboardPage() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  const cardData = [
    { title: 'Authentication', icon:Building2, href:"/home/settings/user-management/authentication"},
    { title: 'Authorization', icon:FolderKanban, href:"/home/settings/user-management/authorization"}, 
  ];

  return (
    <div className="grid items-start gap-8">

      <Card className="y-4">
        <CardHeader>
          <CardTitle>User Management</CardTitle>
          <CardDescription>
            Manage user within your organization.
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
      

    </div>
  );
}
