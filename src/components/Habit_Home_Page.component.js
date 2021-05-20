import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { isAuth } from '../helpers/auth';
import { ToastContainer, toast } from 'react-toastify';

export default class Habit_Home_Page extends Component {
  constructor(props) {
    super(props);
    this.state = {habits: []};
  }
  loadHabits(){
    axios
      .get(`${process.env.REACT_BACKEND_URL}/habits/owned/${isAuth()._id}`)
      .then(res => {
        this.setState({habits: res.data});
      })
      .catch(err => {
        toast.error(`Error: ${err.response.statusText}`);
      });
      console.log(this.habits);
  }
  componentDidMount(){
    console.log('hi');
    this.loadHabits()
  }

  render() {
    return (
        <div>
            <p>Hello World! (home page)</p>
        </div>
 
    );
  }
}