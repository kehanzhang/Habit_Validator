import React, { Component } from 'react';
import Habits from './Habits.component';

export default class Habit_Home_Page extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div>
            <p>(home page)</p>
            <Habits/>           
        </div>
 
    );
  }
}