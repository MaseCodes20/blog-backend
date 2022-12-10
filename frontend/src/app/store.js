import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import postsReducer from "../features/post/postsSlice";
import usersReducer from "../features/users/usersSlice";
import connectModalReducer from "../features/modals/connectModalSlice";
import hasAccountReducer from "../features/user/hasAccountSlice";
import formSelectorReducer from "../features/user/formSelectorSlice";
import postModalReducer from "../features/modals/postModalSlice";
import shareModalReducer from "../features/modals/ShareModalSlice";
import editProfileModalReducer from "../features/modals/editProfileModalSlice";
import searchTagReducer from "../features/search/SearchTagSlice";
import searchReducer from "../features/search/SearchSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    posts: postsReducer,
    users: usersReducer,
    connectModal: connectModalReducer,
    postModal: postModalReducer,
    shareModal: shareModalReducer,
    editProfileModal: editProfileModalReducer,
    hasAccount: hasAccountReducer,
    formSelector: formSelectorReducer,
    searchTag: searchTagReducer,
    search: searchReducer,
  },
});
