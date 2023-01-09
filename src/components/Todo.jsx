import React from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo } from "../features/todosSlice";

const Todo = () => {
  const todosApp = useSelector((state) => state.todos.todosData);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <>
      {todosApp.map((todo, index) => (
        <div className="todo-row" key={index}>
          <div> {todo.todo}</div>
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
