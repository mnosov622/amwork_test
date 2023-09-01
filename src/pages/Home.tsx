import axios from "axios";
import TaskCard from "../components/TaskCard";
import addTaskIcon from "../assets/add_bold.svg";
import "./Home.css";
import { useEffect, useState } from "react";

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

const Home = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((response) => {
        setTodos(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <>
      <section className="flex justify-space-between align-center">
        <h1 className="green-bold">Today</h1>
        <section className="flex">
          <img className="addTaskIcon" src={addTaskIcon} alt="add task" />
          <div className="tasks_count">2</div>
        </section>
      </section>
      {todos.map((todo) => (
        <TaskCard key={todo.id} id={todo.id} title={todo.title} completed={todo.completed} />
      ))}
    </>
  );
};

export default Home;
