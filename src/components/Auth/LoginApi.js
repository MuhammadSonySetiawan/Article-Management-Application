"use client"
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { eddAuth } from "@/app/GlobalRedux/Features/counter/dataAuth";

function LoginApi() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();
  const dispatch = useDispatch();

  const handleLogin = (event) => {
    event.preventDefault();
      axios
        .post(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`, {
          username,
          password,
        })
        .then((response) => {
          if (username == "admin") {
            router.push("/dashboard-admin-users");
            dispatch(eddAuth(response.data.access));
          } else {
            router.push("/dashboard-owner-profile");
            dispatch(eddAuth(response.data.access));
          }
        })
        .catch((error) =>
          setError(
            error || "password or username is invalid, try checking again."
          )
        );
  };
  return (
    <div>
      <form onSubmit={handleLogin}>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            id="email"
            type="text"
            placeholder="Email"
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            type="password"
            placeholder="******************"
          />
          {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
        <div className="flex items-center justify-between mb-4">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginApi;
