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

export default async function NewCustomerRoute() {
  noStore();
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  async function postData(formData: FormData) {
    "use server";

    if (!user) {
      throw new Error("Not authorized");
    }

    const name = formData.get("name") as string;
    const code = formData.get("code") as string;

    await prisma.customer.create({
      data: {
        userId: user?.id,
        name: name,
        code: code,
      },
    });

    return redirect("/home/customer");
  }

  return (
    <Card>
      <form action={postData}>
        <CardHeader>
          <CardTitle>New Customer</CardTitle>
          <CardDescription>
            Create specific customer
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-y-5">
          <div className="gap-y-2 flex flex-col">
            <Label>Customer Name</Label>
            <Input
              required
              type="text"
              name="name"
              placeholder="Name of customer"
            />
          </div>

          <div className="flex flex-col gap-y-2">
            <Label>Code</Label>
            <Input
              required
              type="text"
              name="code"
              placeholder="Code of customer"
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
