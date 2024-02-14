"use client";

import { cn } from "@/lib/utils";
import { CreditCard, Home, Settings } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems, navItemsSetting } from "./UserNav";

export function DashboardNav() {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div className="fixed px-5 h-screen w-64">

      <nav className="grid items-start gap-2">
        {navItems.map((item, index) => (
          <Link key={index} href={item.href}>
            <span
              className={cn(
                "group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                pathname === item.href ? "bg-accent" : "bg-transparent"
              )}
            >
              <item.icon className="mr-2 h-4 w-4 text-primary" />
              <span>{item.name}</span>
            </span>
          </Link>
        ))}
      </nav>
      <div className="my-4 h-px bg-gray-200"></div>
      <nav className="grid items-start gap-2">
        {navItemsSetting.map((item, index) => (
          <Link key={index} href={item.href}>
            <span
              className={cn(
                "group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                pathname === item.href ? "bg-accent" : "bg-transparent"
              )}
            >
              <item.icon className="mr-2 h-4 w-4 text-primary" />
              <span>{item.name}</span>
            </span>
          </Link>
        ))}
      </nav>
    </div>
  );
}
