import axios from "axios";
import { faker } from "@faker-js/faker";
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

  // Function to generate a random date in the specified format
  const generateRandomDate = () => {
    const randomDate = faker.date.between(
      new Date(),
      new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000)
    );
    const month = randomDate.toLocaleString("default", { month: "short" });
    const day = randomDate.getDate();
    const hour = randomDate.getHours();
    const minute = randomDate.getMinutes();
    const amOrPm = hour >= 12 ? "PM" : "AM";
    const formattedDate = `${month} ${day}, ${hour % 12}:${minute
      .toString()
      .padStart(2, "0")} ${amOrPm}`;
    return formattedDate;
  };

  return (
    <>
      <section className="flex justify-space-between align-center">
        <h1 className="green-bold">Today</h1>
        <section className="flex">
          <img className="addTaskIcon" src={addTaskIcon} alt="add task" />
          <div className="tasks_count">{todos && todos.length}</div>
        </section>
      </section>
      {todos.map((todo) => (
        <TaskCard
          key={todo.id}
          title={todo.title}
          completed={todo.completed}
          taskDescr={faker.lorem.sentence()}
          startDate={generateRandomDate()}
          endDate={generateRandomDate()}
        />
      ))}
    </>
  );
};

export default Home;
