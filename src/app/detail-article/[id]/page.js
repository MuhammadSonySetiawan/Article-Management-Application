"use client";
import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import DetailArticle from "@/components/dasboard/Articles/DetailArticle";
import SidebarOwner from "@/components/dasboard/Sidebar/SidebarOwner";

function page(params) {
const [dataArticle, setDataArticle] = useState()

    const token = process.env.NEXT_PUBLIC_TOKEN_OWNER;

    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    };
    
    useEffect(()=> {
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
   
    },[])
  
  return (
    <div>
      <div className="flex">
        <div className="relative">
          <SidebarOwner />
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