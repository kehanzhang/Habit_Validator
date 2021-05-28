import React from 'react'
import axios from 'axios';
import {toast } from 'react-toastify';
import {TrashIcon} from '@primer/octicons-react'
import { Link } from 'react-router-dom';


const Habit = ({habit, onDelete}) => {
    return (
    <div className="card text-center m-3 lg:w-1/2 xl:w-5/12">
        <div className="card-header">
            <div className="container">
            <div className="row">
                <div className="col">
                <h6>Complete:</h6>
                </div>
                <div className="col">
                <Link to = '/create' className="">
                    <h6>History:</h6>
                </Link>
                </div>
                <div className="col">
                <h6>Streak:</h6>
                </div>
                <div className="col">
                <button 
                type="button" 
                className="btn btn-link" 
                onClick={() => onDelete(habit._id)}>
                {/* {(e) => {)
                    e.preventDefault();
                    axios.delete(`${process.env.REACT_APP_BACKEND_URL}/habits/${habit._id}`)
                    .then(res => console.log(res.data))
                    .catch(err => {
                        toast.error(err.response.data.errors);
                    });
                    window.location.reload();
                }} */}
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
    )
}

export default Habit
