'use client'
import Link from 'next/link';
import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function Articles() {
     const [article, setArticle] = useState();
     let token 

       if(token){
        token = useSelector((state) => state.dataAuth.data); 
       } else { 
        token = process.env.NEXT_PUBLIC_TOKEN_OWNER;
       }

     const config = {
       headers: {
         "Content-Type": "application/json",
         Authorization: `Bearer ${
           token
         }`,
       },
     };
 
     useEffect(() => {
      console.log(process)
       axios
         .get(`${process.env.NEXT_PUBLIC_API_URL}/api/articles`, config)
         .then((res) => {
           setArticle(res.data.data);
         })
         .catch((err) => console.log(err));
     }, []);
  return (
    <div className="p-5 grid gap-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 ">
      {article?.map((result, key) => (
        <>
          <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Link href="#">
              <img
                class="rounded-t-lg object-none w-full h-60"
                src={result.image}
                alt=""
              />
            </Link>
            <div class="p-5">
              <Link href="#">
                <h5 class="mb-2 text-xl font-medium tracking-tight text-gray-900 dark:text-white">
                  {result.title}
                </h5>
              </Link>
              <Link
                href={`detail-article/${result.id}`}
                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
                <svg
                  class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </>
      ))}
    </div>
  );
}

export default Articles