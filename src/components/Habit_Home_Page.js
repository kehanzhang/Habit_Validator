import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { isAuth } from '../helpers/auth';
import { ToastContainer, toast } from 'react-toastify';
import {TrashIcon} from '@primer/octicons-react'
import Habit from './Habit.component';

export default class Habit_Home_Page extends Component {
  constructor(props) {
    super(props);
    this.loadHabits = this.loadHabits.bind(this);
    this.state = {habits: []};
  }

  loadHabits(){
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/habits/owned/${isAuth()._id}`)
      .then(res => {
        this.setState({habits: res.data});
        console.log(res.data)
        console.log('data^')
        console.log(this.state.habits);
      })
      .catch(err => {
        toast.error('Error');
      });
      
  }

  componentDidMount(){
    this.loadHabits()
  }

  render() {
    return (
        <div>
            <p>(home page)</p>
            <ul>
              {this.state.habits.map((habit, index) => {
                return <li className>
                  <div className="card text-center m-5 lg:w-1/2 xl:w-5/12">
                    <div className="card-header">
                      <div class="container">
                        <div class="row">
                          <div class="col">
                            <h6>Complete:</h6>
                          </div>
                          <div class="col">
                            <Link to = '/create' className="">
                              <h6>History:</h6>
                            </Link>
                          </div>
                          <div class="col">
                            <h6>Streak:</h6>
                          </div>
                          <div class="col">
                          </div>
                          <div class="col">
                          </div>
                          <div class="col">
                            <button type="button" class="btn btn-link"
                            onClick={(e) => {
                              e.preventDefault();
                              axios.delete(`${process.env.REACT_APP_BACKEND_URL}/habits/${habit._id}`)
                                .then(res => console.log(res.data))
                                .catch(err => {
                                  toast.error(err.response.data.errors);
                                });
                              window.location.reload();
                            }}>
                              <TrashIcon size={16} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="card-body">
                      <h5 class="card-title">{habit.title}</h5>
                      <p class="card-text">{habit.description}</p>
                    </div>
                  </div>
                </li>
              })}
            </ul>            
        </div>
 
    );
  }
}