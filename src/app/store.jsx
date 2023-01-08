import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "../features/todosSlice";
import formReducer from "../features/formSlice";

export const store = configureStore({
  reducer: {
    todos: todosReducer,
    form: formReducer,
  },
});
