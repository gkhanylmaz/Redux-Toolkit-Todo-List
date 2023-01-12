import React, { useEffect } from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, completedTodo } from "../features/todosSlice";

const Todo = () => {
  const todosApp = useSelector((state) => state.todos.todosData);
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todosApp));
  }, [todosApp]);

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const completedClick = (id) => {
    dispatch(completedTodo(id));
  };

  return (
    <>
      {todosApp.map((todo, index) => (
        <div
          onClick={() => completedClick(todo.id)}
          className={todo.isCompleted ? "todo-row complete" : "todo-row"}
          key={index}
        >
          <div> {todo.todoKey}</div>
          <div className="icons">
            <RiCloseCircleLine
              className="delete-icon"
              onClick={() => handleDelete(todo.id)}
            />
            <TiEdit className="edit-icon" />
          </div>
        </div>
      ))}
    </>
  );
};

export default Todo;
