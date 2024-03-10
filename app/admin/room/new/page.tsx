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

export default async function NewRoomRoute() {
  noStore();
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  async function postData(formData: FormData) {
    "use server";

    if (!user) {
      throw new Error("Not authorized");
    }

    const name = formData.get("name") as string;
    const description = formData.get("description") as string;
    const type = formData.get("type") as string;
    const area = formData.get("area") as string;
    const capacity = formData.get("capacity") as string;

    const isActiveString = formData.get("isActive") as string;
    const isActive: boolean = isActiveString === "true";

    await prisma.room.create({
      data: {
        name: name,
        description: description,
        type: type,
        area: area,
        capacity: capacity,
        isActive: isActive,
        userId: user?.id,
      },
    });

    return redirect("/admin/room");
  }

  return (
    <Card>
      <form action={postData}>
        <CardHeader>
          <CardTitle>New Room</CardTitle>
          <CardDescription>
            Right here you can now create your new notes
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-y-5">
          <div className="gap-y-2 flex flex-col">
            <Label>Name</Label>
            <Input
              required
              type="text"
              name="name"
              placeholder="Name for your room"
            />
          </div>

          <div className="flex flex-col gap-y-2">
            <Label>Description</Label>
            <Textarea
              name="description"
              placeholder="Describe your room"
              required
            />
          </div>

          <div className="gap-y-2 flex flex-col">
            <Label>Type</Label>
            <Select name="type" defaultValue={"meeting_room"}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Type of Room</SelectLabel>
                  <SelectItem value="Meeting Room">Meeting Room</SelectItem>
                  <SelectItem value="Ballroom">Ballroom</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div className="gap-y-2 flex flex-col">
            <Label>Area (Meters²)</Label>
            <Input
              required
              type="number"
              name="area"
              placeholder="Define area of your room"
            />
          </div>

          <div className="gap-y-2 flex flex-col">
            <Label>Capacity</Label>
            <Input
              required
              type="number"
              name="capacity"
              placeholder="Define capacity (number of people) of your room"
            />
          </div>

          <div className="gap-y-2 flex flex-col">
            <Label>Status</Label>
            <Select name="isActive" defaultValue={"true"}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Status</SelectLabel>
                  <SelectItem value="true">Active</SelectItem>
                  <SelectItem value="false">Inactive</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
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
