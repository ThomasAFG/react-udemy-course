import React, { useState } from "react";
import "./styles.css";
import NavBar from "./components/navbar/NavBar";
import TaskList from "./components/tasklist/TaskList";

let idAcc = 0;
const generateId = () => {
  idAcc = idAcc + 1;
  return idAcc;
};

export default function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (title, state) => {
    const newTask = {
      id: generateId(),
      title,
      state
    };
    setTasks((prevState) => {
      return [...prevState, newTask];
    });
  };

  const updateTask = (id, title, state) => {
    setTasks((prevState) => {
      return prevState.map((task) => {
        if (task.id === id) {
          return { ...task, title, state };
        } else {
          return task;
        }
      });
    });
  };

  const deleteTask = (id) => {
    setTasks((prevState) => {
      return prevState.filter((task) => task.id !== id);
    });
  };

  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <TaskList
          title="Pendente"
          onAddTask={addTask}
          tasks={tasks.filter((task) => task.state === "Pendente")}
          onTaskUpdate={updateTask}
          onDeleteTask={deleteTask}
        />
        <TaskList
          title="Fazendo"
          onAddTask={addTask}
          tasks={tasks.filter((task) => task.state === "Fazendo")}
          onTaskUpdate={updateTask}
          onDeleteTask={deleteTask}
        />
        <TaskList
          title="Completa"
          onAddTask={addTask}
          tasks={tasks.filter((task) => task.state === "Completa")}
          onTaskUpdate={updateTask}
          onDeleteTask={deleteTask}
        />
      </div>
    </div>
  );
}
