import { createSlice } from "@reduxjs/toolkit";
import { addTodo } from "./todosSlice";

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
  extraReducers: (builder) => {
    builder.addCase(addTodo, (state, action) => {
      state.todo = "";
    });
  },
});

export const { todo } = formSlice.actions;

export default formSlice.reducer;
