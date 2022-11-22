import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSignUp: false,
  isSignIn: false,
};

export const formSelectorSlice = createSlice({
  name: "formSelector",
  initialState,
  reducers: {
    selectSignUp: (state) => {
      state.isSignUp = true;
    },
    deselectSignUp: (state) => {
      state.isSignUp = false;
    },
    deselectSignIn: (state) => {
      state.isSignIn = false;
    },
    selectSignIn: (state) => {
      state.isSignIn = true;
    },
    resetFormSelector: (state) => {
      state.isSignIn = false;
      state.isSignUp = false;
    },
  },
});

export const {
  selectSignIn,
  selectSignUp,
  deselectSignIn,
  deselectSignUp,
  resetFormSelector,
} = formSelectorSlice.actions;
export default formSelectorSlice.reducer;
