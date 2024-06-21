import { auth } from "@/lib/auth";
import LoginApi from "@/components/Auth/LoginApi";
import LoginGoogle from "@/components/Auth/LoginGoogle";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await auth();

  if (!session) {
    return (
      <div>
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
            <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

            <LoginApi />

            <div className="flex items-center justify-center mb-4">
              <span className="text-gray-500">or</span>
            </div>

            <LoginGoogle />
          </div>
        </div>
      </div>
    );
  }

  return (

      redirect('/dashboard-owner-profile')

  );
}