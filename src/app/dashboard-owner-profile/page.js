import { auth } from "@/lib/auth";
import React from "react";
import Profile from "@/components/dasboard/Profile/Profile";
import SidebarOwner from "@/components/dasboard/Sidebar/SidebarOwner";

async function page() {
   const session = await auth();
  return (
    <div>
      <div className="flex">
        <div className="relative">
          <SidebarOwner />
        </div>
        <div className="ml-64 p-4 w-full">
          <h1 className="text-3xl font-bold mb-4">Profile</h1>
          <p>This is the content for Profile page.</p>
          {/* <div>{JSON.stringify(session)}</div> */}
          <Profile name={session.user.name} email={session.user.email} />
        </div>
      </div>
    </div>
  );
}

export default page;
