import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isShareModalOpen: false,
};

export const shareModalSlice = createSlice({
  name: "shareModal",
  initialState,
  reducers: {
    openShareModal: (state) => {
      state.isShareModalOpen = true;
    },
    closeShareModal: (state) => {
      state.isShareModalOpen = false;
    },
  },
});

export const { openShareModal, closeShareModal } = shareModalSlice.actions;
export default shareModalSlice.reducer;
