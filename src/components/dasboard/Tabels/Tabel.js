'use client'
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import tabelData from "./TabelData";
import Edit from "./ButtonsTabel/Edit";
import Delete from "./ButtonsTabel/Delete";

export default function Tabel() {
  const [user, setUser] = useState()
  const token = useSelector((state) => state.dataAuth.data);
    const config = {
      headers: { 
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}` }
    };

  useEffect(() => {
       axios
         .get(`${process.env.NEXT_PUBLIC_API_URL}/api/users`, config)
         .then((res) => setUser(res.data))
         .catch((err) => console.log(err));
  }, []);

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white ">
        <thead>
          <tr>
            {tabelData.map((res, key) => (
              <>
                <th
                  key={key}
                  className="py-2 px-4 border-b border-gray-200 bg-gray-100 text-left text-sm uppercase text-gray-600"
                >
                  {res}
                </th>
              </>
            ))}
          </tr>
        </thead>
        <tbody>
          {user?.map((res, key) => (
            <>
              <tr key={key}>
                <td className="py-2 px-4 text-sm border-b border-gray-200">
                  {key + 1}
                </td>
                <td className="py-2 px-4 text-sm border-b border-gray-200">
                  {res.first_name + " " + res.last_name}
                </td>
                <td className="py-2 px-4 text-sm border-b border-gray-200">
                  <Edit id={res.id} />

                  <Delete id={res.id} />
                </td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
}
