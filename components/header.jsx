import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { PenBox } from "lucide-react";
import UserMenu from "./user-menu";

// Clerk Imports
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
} from "@clerk/nextjs";


const Header = () => {
  return (
    <nav className="mx-auto py-2 px-4 flex justify-between items-cente shadow-md border-b-2">
      <Link href={"/"} className="flex items-center">
        <Image
          src="/logo.png"
          width={150}
          height={60}
          alt="logo"
          className="h-16 w-auto"
        />
      </Link>

      <div className="flex items-center gap-4">
        <Link href={"/events?create=true"} className="">
          <Button>
            <PenBox /> Create Event
          </Button>
        </Link>

        <SignedOut>
          <SignInButton forceRedirectUrl="/dashboard">
            <Button variant="outline">Login</Button>
          </SignInButton>
        </SignedOut>

        <SignedIn>
          <UserMenu />
        </SignedIn>
      </div>
    </nav>
  );
};

export default Header;
