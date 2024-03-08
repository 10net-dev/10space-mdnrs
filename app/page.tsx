
import { Button } from "@/components/ui/button";
import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

import { Login } from "./components/Login"
import { RoomsCatalogue } from "./components/RoomsCatalogue"
import { RoomsList } from "./components/RoomsList"
import { Footer } from "./components/Footer"

export default async function Home() {

  const { isAuthenticated } = getKindeServerSession();

  if (await isAuthenticated()) {
    return redirect("/home");
  }
  return (
    <div>
      {/* <Login/> */}
      {/* <RoomsCatalogue/> */}
      <RoomsList/>
      <Footer/>

    </div>
  );
}
