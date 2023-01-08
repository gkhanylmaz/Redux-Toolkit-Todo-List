import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { todo } from "../features/formSlice";
import { addTodo } from "../features/todosSlice";

const TodoForm = () => {
  const dispatch = useDispatch();
  const todoAdd = useSelector((state) => {
    return {
      todo: state.form.todo,
    };
  });

  const handleChange = (e) => {
    dispatch(todo(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(todoAdd));
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input type="text" className="todo-input" onChange={handleChange} />
      <button type="submit" className="todo-button">
        {" "}
        Add Todo
      </button>
    </form>
  );
};

export default TodoForm;
