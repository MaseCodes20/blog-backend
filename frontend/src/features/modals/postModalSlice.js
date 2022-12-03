import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isPostModalOpen: false,
  isEditPost: false,
  post: null,
};

export const postModalSlice = createSlice({
  name: "postModal",
  initialState,
  reducers: {
    openPostModal: (state) => {
      state.isPostModalOpen = true;
    },
    closePostModal: (state) => {
      state.isPostModalOpen = false;
      state.isEditPost = false;
      state.post = null;
    },
    editPost: (state, action) => {
      state.isPostModalOpen = true;
      state.isEditPost = true;
      state.post = action.payload;
    },
  },
});

export const { openPostModal, closePostModal, editPost } =
  postModalSlice.actions;
export default postModalSlice.reducer;
