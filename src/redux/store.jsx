import { configureStore } from "@reduxjs/toolkit";
import auth from "./auth/authslice";
import posts from "./posts/postsSlice";
import profile from "./profileSlice";

export const store = configureStore({
  reducer: { auth, posts, profile },
});
