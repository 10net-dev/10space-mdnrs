import { Button } from "@/components/ui/button";
import Link from "next/link";
import prisma from "../../lib/db";
import hashPassword from "../../lib/crypto";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Edit, File, Trash } from "lucide-react";
import { Card } from "@/components/ui/card";

import { TrashDelete } from "../../components/Submitbuttons";
import { revalidatePath, unstable_noStore as noStore } from "next/cache";

async function getData(userId: string) {
  noStore();
  const data = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    select: {
      Orders: {
        select: {
          id: true,
          nameCustomer: true,
          emailCustomer: true,
          phoneCustomer: true,
          companyCustomer: true,
          orderStatus: true,
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

export default async function AdminOrderPage() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  const data = await getData(user?.id as string);

  async function deleteNote(formData: FormData) {
    "use server";

    const orderId = formData.get("orderId") as string;

    await prisma.order.delete({
      where: {
        id: orderId,
      },
    });

    revalidatePath("/dasboard");
  }
  return (
    <div className="grid items-start gap-y-8">
      <div className="flex items-center justify-between px-2">
        <div className="grid gap-1">
          <h1 className="text-3xl md:text-4xl">Your Order</h1>
          <p className="text-lg text-muted-foreground">
            Here you can see and create new order
          </p>
        </div>

        {/* Remove checking subscription status */}
        {/* {data?.Subscription?.status === "active" ? (
          <Button asChild>
            <Link href="/admin/order/new">Create a new Order</Link>
          </Button>
        ) : (
          <Button asChild>
            <Link href="/admin/billing">Create a new Order</Link>
          </Button>
        )} */}

          <Button asChild>
            <Link href="/admin/order/new">Create a new Order</Link>
          </Button>

      </div>

      {data?.Orders.length == 0 ? (
        <div className="flex min-h-[400px] flex-col items-center justify-center rounded-md border border-dashed p-8 text-center animate-in fade-in-50">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
            <File className="w-10 h-10 text-primary" />
          </div>

          <h2 className="mt-6 text-xl font-semibold">
            You dont have any orders created
          </h2>
          <p className="mb-8 mt-2 text-center text-sm leading-6 text-muted-foreground max-w-sm mx-auto">
            You currently dont have any orders. please create some so that you
            can see them right here.
          </p>
          <Button asChild>
            <Link href="/admin/order/new">Create a new Order</Link>
          </Button>
        </div>
      ) : (
        <div className="flex flex-col gap-y-4">
          {data?.Orders.map((item) => (
            <Card
              key={item.id}
              className="flex items-center justify-between p-4"
            >
              <div>
                
                <h2 className="font-semibold text-xl text-primary">
                  {item.nameCustomer}
                </h2>
                <h4 className="text-sm text-primary">
                  {item.emailCustomer} - {item.phoneCustomer}
                </h4>

                <p>
                  {item.companyCustomer} - 
                  {new Intl.DateTimeFormat("en-US", {
                    dateStyle: "full",
                  }).format(new Date(item.createdAt))}
                </p>
              </div>

              <div className="flex gap-x-4">
                <Link href={`/admin/order/new/${item.id}`}>
                  <Button variant="outline" size="icon">
                    <Edit className="w-4 h-4" />
                  </Button>
                </Link>
                <form action={deleteNote}>
                  <input type="hidden" name="orderId" value={item.id} />
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
