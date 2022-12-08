import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchTag: "",
};

export const searchTagSlice = createSlice({
  name: "searchTag",
  initialState,
  reducers: {
    setSearchTag: (state, action) => {
      state.searchTag = action.payload;
    },
    clearSearchTag: (state) => {
      state.searchTag = "";
    },
  },
});

export const { setSearchTag, clearSearchTag } = searchTagSlice.actions;
export default searchTagSlice.reducer;
