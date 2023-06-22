import React, { useState } from "react";
import PropTypes from "prop-types";
import "./taskitem.css";

export default function TaskItem({
  id,
  title,
  state,
  onTaskUpdate,
  onDeleteTask
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editableTitle, setEditableTitle] = useState(title);

  const onTitleChange = (event) => {
    setEditableTitle(event.target.value);
    onTaskUpdate(id, event.target.value, state);
  };

  const onTitleKeyDown = (event) => {
    if (event.key === "Enter") {
      setIsEditing(false);
      if (editableTitle === "") {
        onDeleteTask(id);
      }
    }
  };

  const onTitleBlur = () => {
    setIsEditing(false);
    if (editableTitle === "") {
      onDeleteTask(id);
    }
  };

  const onStateChange = (event) => {
    onTaskUpdate(id, title, event.target.value);
  };

  if (isEditing) {
    return (
      <div className="taskitem">
        <input
          type="text"
          value={editableTitle}
          onChange={onTitleChange}
          onKeyDown={onTitleKeyDown}
          onBlur={onTitleBlur}
        />
      </div>
    );
  } else {
    return (
      <div className="taskitem">
        <div onClick={(e) => setIsEditing(true)}>{title}</div>
        <select onChange={onStateChange} value={state}>
          <option value="Pendente">Pendente</option>
          <option value="Fazendo">Fazendo</option>
          <option value="Completa">Completa</option>
        </select>
      </div>
    );
  }
}

TaskItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  onTaskUpdate: PropTypes.func.isRequired,
  onDeleteTask: PropTypes.func.isRequired
};
