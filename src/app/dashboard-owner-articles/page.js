import React from 'react'
import Articles from '@/components/dasboard/Articles/Articles';
import SidebarOwner from '@/components/dasboard/Sidebar/SidebarOwner';

function page() {
  return (
    <div className="flex">
      <SidebarOwner />
      <div className="ml-64 p-4 w-full">
        <h1 className="text-3xl font-bold mb-4">Articles</h1>
        <p>This is the content for Articles page.</p>
        <Articles />
      </div>
    </div>
  );
}

export default page

