import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import postsReducer from "../features/post/postsSlice";
import usersReducer from "../features/users/usersSlice";
import connectModalReducer from "../features/connectModal/connectModalSlice";
import hasAccountReducer from "../features/user/hasAccountSlice";
import formSelectorReducer from "../features/user/formSelectorSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    posts: postsReducer,
    users: usersReducer,
    connectModal: connectModalReducer,
    hasAccount: hasAccountReducer,
    formSelector: formSelectorReducer,
  },
});
