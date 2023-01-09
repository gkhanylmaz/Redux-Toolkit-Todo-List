import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todosData: [],
};
export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todosData.push({ todo: action.payload.todo, id: nanoid() });
    },
    deleteTodo: (state, action) => {
      const deleteTodo = state.todosData.filter(
        (todo) => todo.id !== action.payload
      );
      state.todosData = deleteTodo;
    },
    editTodo: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTodo, deleteTodo, editTodo } = todosSlice.actions;

export default todosSlice.reducer;
