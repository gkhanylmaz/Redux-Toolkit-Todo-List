import React from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";

const Todo = () => {
  return (
    <>
      <div className="todo-row">
        <div> asdasdsa</div>
        <div className="icons">
          <RiCloseCircleLine className="delete-icon" />
          <TiEdit className="edit-icon" />
        </div>
      </div>
      <div className="todo-row">
        <div> a12312312312sa</div>
        <div className="icons">
          <RiCloseCircleLine className="delete-icon" />
          <TiEdit className="edit-icon" />
        </div>
      </div>
      <div className="todo-row">
        <div> asdas adsfasfdasfadsa</div>
        <div className="icons">
          <RiCloseCircleLine className="delete-icon" />
          <TiEdit className="edit-icon" />
        </div>
      </div>
    </>
  );
};

export default Todo;
