import React, { Component } from 'react';
import {Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import './styles.css'
import { signout } from '../helpers/auth';

export default class Navbar extends Component {

  render() {
    return (
      
      <nav className="navbar navbar-light bg-indego navbar-expand-lg mr-auto" style={{'backgroundColor': '#677ee9'}}>
        <a className="navbar-brand ml-6">Habit Validator</a>
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/" className="nav-link">Habits</Link>
          </li>
          <li className="navbar-item">
          <Link to="/create" className="nav-link">Create New Habit</Link>
          </li>
          <li className="navbar-item">
          <Link to="/user" className="nav-link">Account</Link>
          </li>
        </ul>
         <Button className = "mr-6" variant="secondary" type="button"
         onClick={(e) => {
                e.preventDefault();
                signout()
                window.location.reload();
          }}>
          Log Out
          </Button>
      </nav>
    );
  }
}