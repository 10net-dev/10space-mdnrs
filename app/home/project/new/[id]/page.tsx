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

async function getData({ userId, projectId }: { userId: string; projectId: string }) {
  noStore();
  const data = await prisma.project.findUnique({
    where: {
      id: projectId,
      userId: userId,
    },
    select: {
      name: true,
      customer: true,
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
  const data = await getData({ userId: user?.id as string, projectId: params.id });

  async function postData(formData: FormData) {
    "use server";

    if (!user) throw new Error("you are not allowed");

    const name = formData.get("name") as string;
    const customer = formData.get("customer") as string;

    await prisma.project.update({
      where: {
        id: data?.id,
        userId: user.id,
      },
      data: {
        name: name,
        customer: customer,
      },
    });

    revalidatePath("/home");

    return redirect("/home/project");
  }
  return (
    <Card>
      <form action={postData}>
        <CardHeader>
          <CardTitle>Edit project</CardTitle>
          <CardDescription>
            Right here you can now edit your projects
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-y-5">
          <div className="gap-y-2 flex flex-col">
            <Label>Name</Label>
            <Input
              required
              type="text"
              name="name"
              placeholder="Name of your project"
              defaultValue={data?.name}
            />
          </div>

          <div className="flex flex-col gap-y-2">
            <Label>Customer</Label>
            <Input
              required
              type="text"
              name="customer"
              placeholder="Customer Name"
              defaultValue={data?.customer}
            /> 
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
