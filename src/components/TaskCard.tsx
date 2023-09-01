import "./TaskCard.css";
import RectangleIcon from "../assets/rectangle.svg";

interface Props {
  title: string;
  completed: boolean;
  taskDescr: string;
  startDate: string;
  endDate: string;
}

const TaskCard = ({ title, completed, taskDescr, startDate, endDate }: Props) => {
  return (
    <>
      <div className="card-container">
        <main className="card">
          <div className="flex">
            <label className="custom-checkbox">
              <input type="checkbox" checked={false} />
              <span className="checkbox-icon">{completed ? "✓" : ""}</span>
            </label>
            <p className="card_title"> {title}</p>
          </div>
          <section className="card_date">
            <div className="task_startDate">{startDate}</div>
            <div className="task_endDate">{endDate}</div>
          </section>
          <section className="card_descr">
            <p className="card_descr_text">{taskDescr}</p>
          </section>
          <section className="labels">
            <div className="label-purple">Entity title</div>
            <div className="label-gray">
              <span>Front-end</span>
              <img className="rectangle" src={RectangleIcon} alt="rectangle" />
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default TaskCard;
