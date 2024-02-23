import { Button } from "@/components/ui/button";
import Link from "next/link";
import prisma from "../../lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { 
  Edit, 
  File, 
  Trash,
  PlusCircle, 
  Plus
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { TrashDelete } from "../../components/Submitbuttons";
import { revalidatePath, unstable_noStore as noStore } from "next/cache";

async function getData(userId: string) {
  noStore();
  const data = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    select: {
      Customers: {
        select: {
          id: true,
          name: true,
          code: true,
          createdAt: true,
        },
        orderBy: {
          createdAt: "desc",
        },
      }
    },
  });

  return data;
}

export default async function DashboardPage() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  const data = await getData(user?.id as string);

  async function deleteCustomer(formData: FormData) {
    "use server";

    const customerId = formData.get("customerId") as string;

    await prisma.note.delete({
      where: {
        id: customerId,
      },
    });

    revalidatePath("/dasboard");
  }
  return (
    <div className="grid items-start gap-y-8">
      <Card>
        <div className="flex items-center justify-between p-4">
            <CardHeader>
              <CardTitle>Customers</CardTitle>
              <CardDescription>List of customers</CardDescription>
            </CardHeader>

            <Link href="/home/customer/new">
              <Button className="flex items-center justify-center m-6">
                <PlusCircle className="mr-2 w-5 h-5" /> 
                Create
              </Button>
            </Link>

        </div>
        <CardContent>

          {data?.Customers.length == 0 ? (
          <div className="flex min-h-[400px] flex-col items-center justify-center rounded-md border border-dashed p-8 text-center animate-in fade-in-50">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
              <File className="w-10 h-10 text-primary" />
            </div>

            <h2 className="mt-6 text-xl font-semibold">
              You dont have any notes created
            </h2>
            <p className="mb-8 mt-2 text-center text-sm leading-6 text-muted-foreground max-w-sm mx-auto">
              You currently dont have any notes. please create some so that you
              can see them right here.
            </p>

            <Button asChild>
              <Link href="/home/customer/new">Create a new Customer</Link>
            </Button>
          </div>
          ) : (
            <div className="container mx-auto p-4">
              <div className="grid md:grid-cols-2 gap-4">
              {data?.Customers.map((item) => (
                <Card
                  key={item.id}
                  className="flex items-center justify-between p-4"
                >
                  <div>
                    <h2 className="font-semibold text-xl text-primary">
                      {item.code}
                    </h2>
                    <p>
                      {item.name}
                    </p>
                  </div>

                  <div className="flex gap-x-4">
                    <Link href={`/home/customer/new/${item.id}`}>
                      <Button variant="outline" size="icon">
                        <Edit className="w-4 h-4" />
                      </Button>
                    </Link>
                    <form action={deleteCustomer}>
                      <input type="hidden" name="projectId" value={item.id} />
                      <TrashDelete />
                    </form>
                  </div>
                </Card>
              ))}
            </div>
          </div>
          )}
        </CardContent>
      </Card>
      
      
      
      
      

      
    </div>
  );
}
