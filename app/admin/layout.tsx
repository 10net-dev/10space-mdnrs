import { ReactNode } from "react";
import { DashboardNav } from "../components/DashboardNav";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import prisma from "../lib/db";
import { stripe } from "../lib/stripe";
import { unstable_noStore as noStore } from "next/cache";

async function getData({
  email,
  id,
  firstName,
  lastName,
  profileImage,
}: {
  email: string;
  id: string;
  firstName: string | undefined | null;
  lastName: string | undefined | null;
  profileImage: string | undefined | null;
}) {
  noStore();
  const user = await prisma.user.findUnique({
    where: {
      id: id,
    },
    select: {
      id: true,
      stripeCustomerId: true,
    },
  });

  if (!user) {
    const name = `${firstName ?? ""} ${lastName ?? ""}`;
    await prisma.user.create({
      data: {
        id: id,
        email: email,
        name: name,
      },
    });
  }

  if (!user?.stripeCustomerId) {
    const data = await stripe.customers.create({
      email: email,
    });

    await prisma.user.update({
      where: {
        id: id,
      },
      data: {
        stripeCustomerId: data.id,
      },
    });
  }
}

export default async function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  if (!user) {
    return redirect("/");
  }
  await getData({
    email: user.email as string,
    firstName: user.given_name as string,
    id: user.id as string,
    lastName: user.family_name as string,
    profileImage: user.picture,
  });

  return (
    
    <div className="flex flex-col h-screen" style={{ height: '90vh' }}> {/* Ensures the container takes up at least the viewport height */}
      <div className="flex flex-col space-y-6 mt-10 flex-1">
        <div className="container mt-20 grid gap-12 md:grid-cols-[200px_1fr]">
          <aside className="hidden w-[200px] flex-col md:flex">
            <DashboardNav />
          </aside>
          <main>{children}</main> {/* Your page content */}
        </div>
      </div>
      <footer className="w-full min-h-[5vh] border-t lg:items-center flex flex-col lg:px-10 gap-y-2 lg:flex-row lg:justify-between text-sm">
        <div className="w-full text-right">
          <p>© 2024 PT Tennet Nasional Teknologi. All rights reserved.</p>
        </div>
      </footer>
    </div>

    



  );
}
