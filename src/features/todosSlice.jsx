import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todosData: [],
};
export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todosData.push({
        todoKey: action.payload.todoKey,
        id: nanoid(),
        isCompleted: false,
      });
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
    completedTodo: (state, action) => {
      const updatedTodo = state.todosData.map((todo) => {
        if (todo.id === action.payload) {
          todo.isCompleted = !todo.isCompleted;
        }
        return todo;
      });
      state.todosData = updatedTodo;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTodo, deleteTodo, editTodo, completedTodo } =
  todosSlice.actions;

export default todosSlice.reducer;
