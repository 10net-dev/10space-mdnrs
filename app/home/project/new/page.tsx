import { SubmitButton } from "@/app/components/Submitbuttons";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";


import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import prisma from "@/app/lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import { unstable_noStore as noStore } from "next/cache";

async function getCustomer(userId: string) {
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

export default async function NewProjectRoute() {
  noStore();
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  const customers = await getCustomer(user?.id as string);

  async function postData(formData: FormData) {
    "use server";

    if (!user) {
      throw new Error("Not authorized");
    }

    const name = formData.get("name") as string;
    const customer = formData.get("customer") as string;

    await prisma.project.create({
      data: {
        userId: user?.id,
        name: name,
        customer: customer,
        customerId: customer,
      },
    });

    return redirect("/home/project");
  }

  return (
    <Card>
      <form action={postData}>
        <CardHeader>
          <CardTitle>New Project</CardTitle>
          <CardDescription>
            Create specific project
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-y-5">
          <div className="gap-y-2 flex flex-col">
            <Label>Project Name</Label>
            <Input
              required
              type="text"
              name="name"
              placeholder="Name of project"
            />
          </div>

          <div className="space-y-1">
            <Label>Customer</Label>
            <Select name="customer" defaultValue="">
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a customer" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Customer</SelectLabel>
                  {customers?.Customers.map((item) => (
                    <SelectItem value={item.id}>{item.name}</SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </CardContent>

        <CardFooter className="flex justify-between">
          <Button asChild variant="destructive">
            <Link href="/home/project">Cancel</Link>
          </Button>
          <SubmitButton />
        </CardFooter>
      </form>
    </Card>
  );
}
