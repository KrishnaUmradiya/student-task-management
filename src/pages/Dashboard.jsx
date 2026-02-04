import React, { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import { Await, Navigate, useNavigate } from "react-router-dom";
import TaskList from "../component/TaskList";

const Dashboard = () => {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3000/tasks");
      const data = response.json();
      setTasks(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("loginData");
    localStorage.removeItem("authData");
    //localStorage.clear()
    navigate("/login");
  };

  return (
    <div>
      <Navbar title="Task Manager" onLogout={handleLogout} />
      <h1>MY TASK</h1>
      <TaskList />
    </div>
  );
};

export default Dashboard;
