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
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import prisma from "@/app/lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import { revalidatePath, unstable_noStore as noStore } from "next/cache";

async function getData({ userId, customerId }: { userId: string; customerId: string }) {
  noStore();
  const data = await prisma.customer.findUnique({
    where: {
      id: customerId,
      userId: userId,
    },
    select: {
      name: true,
      code: true,
      id: true,
    },
  });

  return data;
}

export default async function DynamicRoute({
  params,
}: {
  params: { id: string };
}) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  const data = await getData({ userId: user?.id as string, customerId: params.id });

  async function postData(formData: FormData) {
    "use server";

    if (!user) throw new Error("you are not allowed");

    const name = formData.get("name") as string;
    const code = formData.get("code") as string;

    await prisma.customer.update({
      where: {
        id: data?.id,
        userId: user.id,
      },
      data: {
        name: name,
        code: code,
      },
    });

    revalidatePath("/home");

    return redirect("/home/customer");
  }
  return (
    <Card>
      <form action={postData}>
        <CardHeader>
          <CardTitle>Edit customer</CardTitle>
          <CardDescription>
            Right here you can now edit your customers
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-y-5">
          <div className="gap-y-2 flex flex-col">
            <Label>Name</Label>
            <Input
              required
              type="text"
              name="name"
              placeholder="Name of your customer"
              defaultValue={data?.name}
            />
          </div>

          <div className="flex flex-col gap-y-2">
            <Label>Code</Label>
            <Input
              required
              type="text"
              name="code"
              placeholder="Customer Code"
              defaultValue={data?.code}
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
  );
}
