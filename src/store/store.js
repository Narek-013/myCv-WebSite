import { configureStore } from "@reduxjs/toolkit";
import { MyCvslices } from "./slices/myCvSlices";

export const store = configureStore({
  reducer: {
    myCv: MyCvslices,
  },
});