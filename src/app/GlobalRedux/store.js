'use client'
import { configureStore } from "@reduxjs/toolkit";
import dataAuth from "./Features/counter/dataAuth";

export const store = configureStore({
  reducer: {
     dataAuth,
  },
});
