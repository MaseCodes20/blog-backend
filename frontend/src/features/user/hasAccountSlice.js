import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  hasAccount: false,
};

export const hasAccountSlice = createSlice({
  name: "hasAccount",
  initialState,
  reducers: {
    toggleTrue: (state) => {
      state.hasAccount = true;
    },
    toggleFalse: (state) => {
      state.hasAccount = false;
    },
  },
});

export const { toggleTrue, toggleFalse } = hasAccountSlice.actions;
export default hasAccountSlice.reducer;
