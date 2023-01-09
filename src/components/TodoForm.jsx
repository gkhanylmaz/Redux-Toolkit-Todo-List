import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { todo } from "../features/formSlice";
import { addTodo } from "../features/todosSlice";

const TodoForm = () => {
  const dispatch = useDispatch();
  const { todoKey } = useSelector((state) => {
    return {
      todoKey: state.form.todo,
    };
  });

  const handleChange = (e) => {
    dispatch(todo(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo({ todoKey }));
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        onChange={handleChange}
        placeholder="Add a todo"
        value={todoKey}
      />
      <button type="submit" className="todo-button">
        {" "}
        Add Todo
      </button>
    </form>
  );
};

export default TodoForm;
