import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../feature/auth/authSlice";
import postsReducer from "../feature/post/postsSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    posts: postsReducer,
  },
});
