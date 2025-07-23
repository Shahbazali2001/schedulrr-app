"use client";
import { UserButton } from "@clerk/nextjs";
import { ChartNoAxesGantt } from "lucide-react";

const UserMenu = () => {
  return (
    <UserButton
      appearance={{
        elements: {
          avatarBox: "w-20 h-20",
        },
      }}
    >
      <UserButton.MenuItems>
        <UserButton.Link 
            label="My Events"
            labelIcon = {<ChartNoAxesGantt size={15} />}
            href="/events"
        />
        <UserButton.Action label="manageAccount" />

       
      </UserButton.MenuItems>
    </UserButton>
  );
};

export default UserMenu;
