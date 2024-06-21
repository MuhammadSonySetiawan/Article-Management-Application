"use client";
import React from "react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import DetailArticle from "@/components/dasboard/Articles/DetailArticle";
import SidebarAdmin from "@/components/dasboard/Sidebar/SidebarAdmin";

function page(params) {
  const [dataArticle, setDataArticle] = useState();

  const token = process.env.NEXT_PUBLIC_TOKEN_ADMIN;
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
 
  useEffect(() => {
    const idArticle = params.params.id;
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/api/articles`, config)
      .then((res) => {
        const dataArticle = res?.data?.data;
        let foundObject = dataArticle.find((item) => item.id === idArticle);
        setDataArticle(foundObject);
        if (!foundObject) {
          console.log("Objek dengan ID tersebut tidak ditemukan.");
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const state = useSelector((state) => state);

  return (
    <div>
      <div className="flex">
        <div className="relative">
          <SidebarAdmin />
        </div>
        <div className="ml-64 p-4 w-full">
          <h1 className="text-3xl font-bold mb-4">{dataArticle?.title}</h1>

          <DetailArticle
            image={dataArticle?.image}
            description={dataArticle?.description}
          />
        </div>
      </div>
    </div>
  );
}

export default page;
