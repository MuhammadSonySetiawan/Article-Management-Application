'use client'
import axios from 'axios'
import React from 'react'
import { useEffect, useState } from "react";
import { useSelector } from 'react-redux'


function Profile({name, email}) {
  const [user, setUser] = useState();
  const token =
    useSelector((state) => state.dataAuth.data);

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/me`, config)
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
    return (
      <>
        <div className="flex h-screen">
          <div className="bg-white p-6 rounded-lg  w-full">
            <div className="overflow-x-auto">
              <table className="text-lg table-auto w-full">
                <tbody>
                  <tr className="border-none font-light">
                    <td className="p-2">First Name</td>
                    <td>:</td>
                    <td className="p-2">{user?.first_name || "-"}</td>
                  </tr>
                  <tr className="border-none font-light">
                    <td className="p-2">Last Name</td>
                    <td>:</td>
                    <td className="p-2">{user?.last_name || "-"}</td>
                  </tr>
                  <tr className="border-none font-light">
                    <td className="p-2">Username</td>
                    <td>:</td>
                    <td className="p-2">{user?.username || name || "-"}</td>
                  </tr>
                  <tr className="border-none font-light">
                    <td className="p-2">Email</td>
                    <td>:</td>
                    <td className="p-2">{user?.email || email || "-"}</td>
                  </tr>
                  <tr className="border-none font-light">
                    <td className="p-2">Role</td>
                    <td>:</td>
                    <td className="p-2">{user?.role || "-"}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </>
    );
}

export default Profile
