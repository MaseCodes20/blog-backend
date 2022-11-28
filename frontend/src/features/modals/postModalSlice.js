import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isPostModalOpen: false,
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
    },
  },
});

export const { openPostModal, closePostModal } = postModalSlice.actions;
export default postModalSlice.reducer;
