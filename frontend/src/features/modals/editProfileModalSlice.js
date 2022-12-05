import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isEditProfileModalOpen: false,
};

export const editProfileModalSlice = createSlice({
  name: "editProfileModal",
  initialState,
  reducers: {
    openEditProfileModal: (state) => {
      state.isEditProfileModalOpen = true;
    },
    closeEditProfileModal: (state) => {
      state.isEditProfileModalOpen = false;
    },
  },
});

export const { openEditProfileModal, closeEditProfileModal } =
  editProfileModalSlice.actions;
export default editProfileModalSlice.reducer;
