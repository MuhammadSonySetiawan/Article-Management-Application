"use client";
import React from "react";
import Table from "@/components/dasboard/Tabels/Tabel";
import SidebarAdmin from "@/components/dasboard/Sidebar/SidebarAdmin";
function page() {
  return (
    <div>
      <div className="flex">
        <div className="relative">
          <SidebarAdmin />
        </div>
        <div className="ml-64 p-4 w-full">
          <h1 className="text-3xl font-bold mb-4">Tabel Users</h1>
          <p className="mb-2">This is the content for Tabel Users page.</p>
          <Table />
        </div>
      </div>
    </div>
  );
}

export default page;
