import "./TaskCard.css";
import RectangleIcon from "../assets/rectangle.svg";
const TaskCard = () => {
  const isChecked = false;

  return (
    <>
      <div className="card-container">
        <main className="card">
          <div className="flex">
            <label className="custom-checkbox">
              <input type="checkbox" checked={false} />
              <span className="checkbox-icon">{isChecked ? "✓" : ""}</span>
            </label>
            <p className="card_title">
              {" "}
              For the sacke of example we are a building company and we have just closed
            </p>
          </div>
          <section className="card_date">
            <div className="task_startDate">Oct 12, 01:00 PM</div>
            <div className="task_endDate">Oct 01, 02:00 PM</div>
          </section>
          <section className="card_descr">
            <p className="card_descr_text">Task description with long long long text</p>
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
