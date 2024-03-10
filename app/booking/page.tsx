
import { Button } from "@/components/ui/button";
import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

import { Rooms } from "./room/page"
import { Footer } from "../components/Footer"

export default async function Book() {

  const { isAuthenticated } = getKindeServerSession();

  if (await isAuthenticated()) {
    return redirect("/booking");
  }
  return (
    <div>
      <Rooms/>
      <Footer/>

    </div>
  );
}
