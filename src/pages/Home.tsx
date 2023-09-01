import TaskCard from "../components/TaskCard";
import addTaskIcon from "../assets/add_bold.svg";
import "./Home.css";

const Home = () => {
  return (
    <>
      <section className="flex justify-space-between align-center">
        <h1 className="green-bold">Today</h1>
        <section className="flex">
          <img className="addTaskIcon" src={addTaskIcon} alt="add task" />
          <div className="tasks_count">2</div>
        </section>
      </section>
      <TaskCard />
    </>
  );
};

export default Home;
