"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useSelector } from "react-redux";

const Page = (params) => {
  const token = useSelector((state) => state.dataAuth.data);
  const idUser = params.idUser;
  const router = useRouter();

  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    username: "",
    email: "",
  });

  // Fetch user data
  useEffect(() => {
    if (idUser) {
      axios
        .get(`${process.env.NEXT_PUBLIC_API_URL}/api/users/${idUser}`, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          const dataUser = res.data;
          if (dataUser) {
            setUser(dataUser);
          } else {
            console.log("Objek dengan ID tersebut tidak ditemukan.");
          }
        })
        .catch((err) => console.log(err));
    }
  }, [idUser, token]);

  // Update user data
  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put(
        `${process.env.NEXT_PUBLIC_API_URL}/api/users/${idUser}`,
        {
          first_name: user.first_name,
          last_name: user.last_name,
          username: user.username,
          email: user.email,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        console.log("User updated successfully:", response.data);
        router.push(`/dashboard-admin-users`);
      })
      .catch((error) => {
        console.error("Error updating user data:", error);
      });
  };

  return (
    <div className="max-w-xl py-8">
      <form onSubmit={handleUpdate}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            First Name
          </label>
          <input
            type="text"
            name="first_name"
            value={user.first_name}
            onChange={(e) => setUser({ ...user, first_name: e.target.value })}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Last Name
          </label>
          <input
            type="text"
            name="last_name"
            value={user.last_name}
            onChange={(e) => setUser({ ...user, last_name: e.target.value })}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Username
          </label>
          <input
            type="text"
            name="username"
            value={user.username}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Update User
        </button>
      </form>
    </div>
  );
};

export default Page;
