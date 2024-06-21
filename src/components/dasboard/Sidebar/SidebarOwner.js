import Link from "next/link";

export default function SidebarOwner() {
  return (
    <div className="relative">
      <div className="fixed top-0 left-0 h-full w-64 bg-gray-800 text-white p-4">
        <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
        <ul>
          <li className="mb-2">
            <Link href={"/dashboard-owner-profile"}>
              <div className="block py-2 px-4 rounded hover:bg-gray-700">
                Profile
              </div>
            </Link>
          </li>
          <li className="mb-2">
            <Link href={"/dashboard-owner-articles"}>
              <div className="block py-2 px-4 rounded hover:bg-gray-700">
                Articles
              </div>
            </Link>
          </li>
         
        </ul>
      </div>

      <div className="w-28 top-[39rem] p-4 fixed  text-white h-full">
        <Link href={"/api/auth/signout"}>Sign Out</Link>
      </div>
    </div>
  );
}
