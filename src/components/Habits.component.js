import { useState, useEffect } from 'react'
import Habit from './Habit.component';
import axios from 'axios';
import { isAuth } from '../helpers/auth';
import {toast } from 'react-toastify';

const Habits = () => {

    const [habits, setHabits] = useState([])

    const loadHabits = () => {
        axios
          .get(`${process.env.REACT_APP_BACKEND_URL}/habits/owned/${isAuth()._id}`)
          .then(res => {
            setHabits(res.data);
          })
          .catch(err => {
            toast.error('Error');
          });
          
    }
    
    useEffect(() => {
        loadHabits();
        console.log('page refreshed')
    }, []);
    
    const deleteHabit = (id) => {
        console.log('delete', id)
        axios.delete(`${process.env.REACT_APP_BACKEND_URL}/habits/${id}`)
            .then(
                res => console.log(res.data),
                setHabits(habits.filter((habit) => habit._id !== id))
            )
            .catch(err => {
                toast.error(err.response.data.errors);
            });
    }

    // console.log(habits)
    // console.log('data^')

    return (
        <>
            {habits.map((habit, index) => (
                <Habit key = {index} habit = {habit} onDelete = {deleteHabit}/>
            ))}
        </>
      )
}

export default Habits
