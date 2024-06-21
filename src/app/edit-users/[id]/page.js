"use client";
import React from "react";
import FormEdit  from '@/components/dasboard/Tabels/FormEdit';
import SidebarAdmin from "@/components/dasboard/Sidebar/SidebarAdmin";

function page(params) {
  const idUser = params.params.id;

  return (
    <div>
      <div className="flex">
        <div className="relative">
          <SidebarAdmin />
        </div>
        <div className="ml-64 p-4 w-full">
          <h1 className="text-3xl font-bold mb-4">Edit Users</h1>
          <p>This is the content for Edit Users page.</p>
          <FormEdit idUser={idUser} />
        </div>
      </div>
    </div>
  );
}

export default page;
