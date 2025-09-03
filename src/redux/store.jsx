import { configureStore } from "@reduxjs/toolkit";
import auth from "./auth/authslice";

export const store = configureStore({
  reducer: { auth },
});
