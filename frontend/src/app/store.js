import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import postsReducer from "../features/post/postsSlice";
import usersReducer from "../features/users/usersSlice";
import connectModalReducer from "../features/connectModal/connectModalSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    posts: postsReducer,
    users: usersReducer,
    connectModal: connectModalReducer,
  },
});
