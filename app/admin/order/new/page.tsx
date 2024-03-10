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
import { unstable_noStore as noStore } from "next/cache";

export default async function NewNoteRoute() {
  noStore();
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  async function postData(formData: FormData) {
    "use server";

    if (!user) {
      throw new Error("Not authorized");
    }

    const nameCustomer = formData.get("nameCustomer") as string;
    const emailCustomer = formData.get("emailCustomer") as string;
    const phoneCustomer = formData.get("phoneCustomer") as string;
    const companyCustomer = formData.get("companyCustomer") as string;
  

    await prisma.order.create({
      data:{
        nameCustomer: nameCustomer,
        emailCustomer: emailCustomer,
        phoneCustomer: phoneCustomer,
        companyCustomer: companyCustomer,
        orderStatus: "CREATED",
        orderId: null,
        userId: user?.id
      }
    })

    return redirect("/admin/order");
  }

  return (
    <Card>
      <form action={postData}>
        <CardHeader>
          <CardTitle>New Order</CardTitle>
          <CardDescription>
            Right here you can now create your new orders
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-y-5">
          <div className="gap-y-2 flex flex-col">
            <Label>Customer Name</Label>
            <Input
              required
              type="text"
              name="nameCustomer"
              placeholder="Name of Customer"
            />
          </div>
          <div className="gap-y-2 flex flex-col">
            <Label>Customer Email</Label>
            <Input
              required
              type="text"
              name="emailCustomer"
              placeholder="Email of Customer"
            />
          </div>
          <div className="gap-y-2 flex flex-col">
            <Label>Customer Phone</Label>
            <Input
              required
              type="text"
              name="phoneCustomer"
              placeholder="Phone of Customer"
            />
          </div>
          <div className="gap-y-2 flex flex-col">
            <Label>Customer Company</Label>
            <Input
              required
              type="text"
              name="companyCustomer"
              placeholder="Phone of Customer"
            />
          </div>

          
        </CardContent>

        <CardFooter className="flex justify-between">
          <Button asChild variant="destructive">
            <Link href="/admin">Cancel</Link>
          </Button>
          <SubmitButton />
        </CardFooter>
      </form>
    </Card>
  );
}
