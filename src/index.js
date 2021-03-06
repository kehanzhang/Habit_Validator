import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import App from './App';
import Login from './screens/Login.jsx';
import Register from './screens/Register.jsx';
import Activate from './screens/Activate.jsx';
import ForgetPassword from './screens/ForgetPassword.jsx';
import ResetPassword from './screens/ResetPassword.jsx';
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from './Routes/PrivateRoute';
import Private from './screens/Private.jsx';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <PrivateRoute path='/private' exact component = {Private} />
      {/* <PrivateRoute path="/" exact component={Habit_Home_Page} />
      <PrivateRoute path="/create" exact component={Create_Habit} /> */}
      <PrivateRoute path='/' exact component = {App} />
      <Route path='/register' exact render={props => <Register {...props} />} />
      <Route path='/users/activate/:token' exact render={props => <Activate {...props} />} />
      <Route path='/login' exact render={props => <Login {...props} />} />
      <Route path='/users/password/forget' exact render={props => <ForgetPassword {...props} />} />
      <Route path='/users/password/reset/:token' exact render={props => <ResetPassword {...props} />} />

    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

