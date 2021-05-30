import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { TrashIcon } from "@primer/octicons-react";
import { Link } from "react-router-dom";

const Habit = ({ habit, onDelete }) => {
  const [today, setToday] = useState([]);

  const updateToday = (id) => {
    console.log("update", id);
    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/habits/updateToday/${id}`)
      .then((res) => {
        console.log(res.data.today, "<- data");
        setToday(res.data.today);
      })
      .catch((err) => {
        toast.error(err.response?.data.errors);
      });
    console.log(today);
  };

  useEffect(() => {
    setToday(habit.today);
    console.log(habit.title, habit.today);
  }, []);

  return (
    <div className="card text-center m-3 lg:w-1/2 xl:w-5/12">
      <div className="card-header ">
        <div className="container">
          <div className="row ">
            <div className="col-4">
              <h6 className="d-inline">Complete:</h6>
              <input
                className="d-inline ml-1 align-middle"
                type="checkbox"
                checked={today}
                onChange={() => updateToday(habit._id)}
              />
            </div>
            <div className="col-2">
              <Link to="/create" className="">
                <h6 className="d-inline">History</h6>
              </Link>
            </div>
            <div className="col-4">
              <h6 className="d-inline">
                Streak: {habit.streak >= 2 ? `🔥${habit.streak}` : ""}
              </h6>
            </div>
            <div className="col-2">
              <button
                type="button"
                style={{ lineHeight: 0 }}
                className="align-top btn btn-link p-0 "
                onClick={() => onDelete(habit._id)}
              >
                <TrashIcon size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="card-body">
        <h5 className="card-title">{habit.title}</h5>
        <p className="card-text">{habit.description}</p>
      </div>
    </div>
  );
};

export default Habit;
