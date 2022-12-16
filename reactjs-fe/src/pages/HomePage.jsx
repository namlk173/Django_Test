import React, { useState, useEffect, useContext } from "react";
import AuthContext from "../context/AuthContext";
import useAxious from "../utils/useAxios";

const HomePage = () => {
  const [tasks, setTasks] = useState([]);
  const { authTokens, logoutUser } = useContext(AuthContext);

  const api = useAxious()

  useEffect(() => {
    getTasks();
  }, []);

  const getTasks = async () => {
    let response = await api.get("/api/task-list/");
    if (response.status === 200) {
      setTasks(response.data);
    }
  };

  return (
    <div>
      <p>You are logged to the homepage</p>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
