import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import './styles.css'
import { signout } from '../helpers/auth';

export default class Navbar extends Component {
  isSignedIn = true;

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg mr-auto">
        <Link to="/" className="navbar-brand">Verifier</Link>
        <div className="collpase navbar-collapse">
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
         {this.isSignedIn ?  <Button variant="outline-primary" type="button" classNam ="mr-4" 
         onClick={(e) => {
                e.preventDefault();
                signout()
          }}>
          Log Out</Button> : <div>Not signed in</div>}
        </div>
      </nav>
    );
  }
}