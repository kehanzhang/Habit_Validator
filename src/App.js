import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";

import Navbar from "./components/navbar.component"
import Habit_Home_Page from "./components/Habit_Home_Page.component"
import Create_Habit from "./components/Create_Habit.component"

//rendered by index.js
function App() {
  return (
    <Router>
      <Navbar />
      <br/>
      <Route path="/" exact component={Habit_Home_Page} />
      <Route path="/create" exact component={Create_Habit} />
    </Router>
  );
}

export default App;