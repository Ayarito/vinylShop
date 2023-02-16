import { configureStore } from "@reduxjs/toolkit";
import vinylSlice from "../slicers/vinylSlice";

export const store = configureStore({
   reducer:{
      vinylStore: vinylSlice,
   },
})