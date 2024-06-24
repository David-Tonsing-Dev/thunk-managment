import { configureStore } from "@reduxjs/toolkit";
import homeSlice from "./slices/homeSlice";
import userSlice from "./slices/userSlice";

export const store = configureStore({
  reducer: {
    homeSlice: homeSlice,
    user: userSlice,
  },
});
