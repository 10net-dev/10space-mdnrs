
import { Button } from "@/components/ui/button";
import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

import { Public } from "./components/Public"
import { RoomsCatalogue } from "./components/RoomsCatalogue"
import { Footer } from "./components/Footer"

export default async function Home() {

  const { isAuthenticated } = getKindeServerSession();

  if (await isAuthenticated()) {
    return redirect("/home");
  }
  return (
    <div>
      <Public/>
      {/* <RoomsCatalogue/> */}
      <Footer/>

    </div>
  );
}
