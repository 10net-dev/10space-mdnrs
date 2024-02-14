import { Button } from "@/components/ui/button";
import Link from "next/link";
import prisma from "../../lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Edit, File, Trash } from "lucide-react";
import { Card } from "@/components/ui/card";
import {
  PlusCircle, 
  Plus
} from "lucide-react";

import { TrashDelete } from "../../components/Submitbuttons";
import { revalidatePath, unstable_noStore as noStore } from "next/cache";

async function getData(userId: string) {
  noStore();
  const data = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    select: {
      Projects: {
        select: {
          name: true,
          id: true,
          customer: true,
          createdAt: true,
          Customer:{
            select:{
              name:true,
              code:true
            }
          }
        },
        orderBy: {
          createdAt: "desc",
        },
      },
      Customers: {
        select: {
          name: true,
          code: true
        },
        orderBy: {
          createdAt: "desc"
        }
      }
    },
  });

  return data;
}

export default async function DashboardPage() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  const data = await getData(user?.id as string);

  async function deleteProject(formData: FormData) {
    "use server";

    const projectId = formData.get("projectId") as string;

    await prisma.project.delete({
      where: {
        id: projectId,
      },
    });

    revalidatePath("/dasboard");
  }
  return (
    <div className="grid items-start gap-y-8">
      <div className="flex items-center justify-between px-2">
        <div className="grid gap-1">
          <h1 className="text-3xl md:text-4xl">Projects</h1>
          <p className="text-lg text-muted-foreground">
            List of projects
          </p>
        </div>

          <Button className="flex items-center justify-center m-6">
            <PlusCircle className="mr-2 w-5 h-5" /> 
            Create
          </Button>

      </div>

      {data?.Projects.length == 0 ? (
        <div className="flex min-h-[400px] flex-col items-center justify-center rounded-md border border-dashed p-8 text-center animate-in fade-in-50">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
            <File className="w-10 h-10 text-primary" />
          </div>

          <h2 className="mt-6 text-xl font-semibold">
            You dont have any project created
          </h2>
          <p className="mb-8 mt-2 text-center text-sm leading-6 text-muted-foreground max-w-sm mx-auto">
            You currently dont have any project. please create some so that you
            can see them right here.
          </p>

          <Button asChild>
            <Link href="/home/project/new">Create a new Project</Link>
          </Button>
        </div>
      ) : (
        <div className="flex flex-col gap-y-4">
          {data?.Projects.map((item) => (
            <Card
              key={item.id}
              className="flex items-center justify-between p-4"
            >
              <div>
                <h2 className="font-semibold text-xl text-primary">
                  {item.name} - {item.Customer?.name}
                </h2>
                <p>
                  {new Intl.DateTimeFormat("en-US", {
                    dateStyle: "full",
                  }).format(new Date(item.createdAt))}
                </p>
              </div>

              <div className="flex gap-x-4">
                <Link href={`/home/project/new/${item.id}`}>
                  <Button variant="outline" size="icon">
                    <Edit className="w-4 h-4" />
                  </Button>
                </Link>
                <form action={deleteProject}>
                  <input type="hidden" name="projectId" value={item.id} />
                  <TrashDelete />
                </form>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
