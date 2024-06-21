import React from "react";

const HomePage = () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const tokenAdmin = process.env.NEXT_PUBLIC_TOKEN_ADMIN
  const tokenOwner = process.env.NEXT_PUBLIC_TOKEN_OWNER;
// NEXT_PUBLIC_AUTH_ACCESS_ADMIN =
//   eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
//     .eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzE4OTkzODcyLCJpYXQiOjE3MTg5MDc0NzIsImp0aSI6ImVkMGViMzQ1NDQwMDQ3MzdiN2M1NzM3NTY0MjZmZjgyIiwidXNlcl9pZCI6Mn0
//     .zC14bz2xG5U3y2J6ojphfFyOrc2P2l1dw2e - nzedKeA;
// NEXT_PUBLIC_AUTH_ACCESS_OWNER =
//   eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
//     .eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzE4OTkzOTc0LCJpYXQiOjE3MTg5MDc1NzQsImp0aSI6IjBmNTFiZTUyM2IxZjRmNmZhMzViNTFlOGJmMWNjOWQ5IiwidXNlcl9pZCI6NX0
//     .NboyA0rASD1LSSyXW8R4RhlRRO9Uvk3GSCg5GyH3Kf4;
  return (
    <div>
      <h1>Home Page</h1>
      <p>API URL: {apiUrl}</p>
      <p>token admin: {tokenAdmin}</p>
      <p>token admin: {tokenOwner}</p>
      
    </div>
  );
};

export default HomePage;
