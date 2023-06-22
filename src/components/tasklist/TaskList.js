import React from "react";
import "./tasklist.css";
import PropTypes from "prop-types";
import TaskItem from "../taskitem/TaskItem";
import PlusIcon from "../../img/plus-icon.svg";

export default function TaskList({
  title,
  onAddTask,
  tasks,
  onTaskUpdate,
  onDeleteTask
}) {
  const addTask = () => {
    onAddTask("Nova Tarefa", title);
  };

  return (
    <div className="tasklist">
      <div className="title">{title}</div>
      <div className="content">
        {tasks.length !== 0 ? (
          tasks.map((task) => {
            return (
              <TaskItem
                key={task.id}
                id={task.id}
                title={task.title}
                state={task.state}
                onTaskUpdate={onTaskUpdate}
                onDeleteTask={onDeleteTask}
              />
            );
          })
        ) : (
          <div className="emptylist"> Lista Vazia </div>
        )}
        <button className="btn" onClick={addTask}>
          <img src={PlusIcon} alt="Icon to add new task." />
          Adicionar Tarefa
        </button>
      </div>
    </div>
  );
}

TaskList.propTypes = {
  title: PropTypes.string.isRequired,
  onAddTask: PropTypes.func.isRequired,
  tasks: PropTypes.array.isRequired,
  onTaskUpdate: PropTypes.func.isRequired,
  onDeleteTask: PropTypes.func.isRequired
};
