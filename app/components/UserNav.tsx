import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { 
  Building2, 
  DoorClosed, 
  Home, 
  Settings,
  FolderKanban, 
  NotebookPen,
  Database,
  Users2

} from "lucide-react";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";

import Link from "next/link";

export const navItems = [
  { name: "Home", href: "/admin", icon: Home },
  { name: "Room", href: "/admin/room", icon: Building2 },
  { name: "Order", href: "/admin/order", icon: FolderKanban },
  { name: "Note", href: "/admin/note", icon: NotebookPen },
];

export const navItemsSetting = [
  { name: "Settings", href: "/admin/settings", icon: Settings },
  { name: "Master", href: "/admin/settings/master", icon: Database },
  { name: "User Managemet", href: "/admin/settings/user-management", icon: Users2 },
  // { name: "Billing", href: "/admin/billing", icon: CreditCard },
];

export function UserNav({
  name,
  email,
  image,
}: {
  name: string;
  email: string;
  image: string;
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-10 w-10 rounded-full">
          <Avatar className="h-10 w-10 rounded-full">
            <AvatarImage src={image} alt="" />
            <AvatarFallback>Jan</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel>
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{name}</p>
            <p className="text-xs leading-none text-muted-foreground">
              {email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {navItems.map((item, index) => (
            <DropdownMenuItem asChild key={index}>
              <Link
                href={item.href}
                className="w-full flex justify-between items-center"
              >
                {item.name}
                <span>
                  <item.icon className="w-4 h-4" />
                </span>
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {navItemsSetting.map((item, index) => (
            <DropdownMenuItem asChild key={index}>
              <Link
                href={item.href}
                className="w-full flex justify-between items-center"
              >
                {item.name}
                <span>
                  <item.icon className="w-4 h-4" />
                </span>
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="w-full flex justify-between items-center"
          asChild
        >
          <LogoutLink>
            Logout{" "}
            <span>
              <DoorClosed className="w-4 h-4" />
            </span>
          </LogoutLink>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
