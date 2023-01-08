import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todo: "",
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    todo: (state, action) => {
      state.todo = action.payload;
    },
  },
});

export const { todo } = formSlice.actions;

export default formSlice.reducer;
