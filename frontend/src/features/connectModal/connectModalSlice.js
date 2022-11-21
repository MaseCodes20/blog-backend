import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

export const connectModalSlice = createSlice({
  name: "connectModal",
  initialState,
  reducers: {
    open: (state) => {
      state.isOpen = true;
    },
    close: (state) => {
      state.isOpen = false;
    },
  },
});

export const { open, close } = connectModalSlice.actions;
export default connectModalSlice.reducer;
