import React, { Component } from "react";
import axios from "axios";
import { isAuth } from "../helpers/auth";
import { ToastContainer, toast } from "react-toastify";

export default class Create_Habit extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      creator: "",
      title: "",
      description: "",
      today: false,
      streak: 0,
      // history: []
      //lifespan: new Date(),
    };
  }

  componentDidMount() {
    //this function is ran before the page is loaded, usefull for hardcoding values in
    let auth = isAuth();
    console.log(auth);
    this.setState({
      creator: auth._id,
    });
  }

  onChangeTitle(e) {
    this.setState({
      title: e.target.value,
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    //never create variables in react normally unless only used in a method
    const habit = {
      creator: this.state.creator,
      title: this.state.title,
      description: this.state.description,
      streak: this.state.streak,
      today: this.state.streak,
    };

    console.log(habit);

    //sending data to the backend
    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/habits/add`, habit)
      .then((res) => console.log(res.data))
      .catch((err) => {
        toast.error(err.response.data.errors);
      });
    window.location = "/";
  }

  render() {
    return (
      //this.onSubmit is called by the form object
      <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
        <h1 className="text-2xl xl:text-3xl font-extrabold">
          Create a new Habit
        </h1>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Title: </label>
            <input
              className="form-control"
              type="text"
              required
              value={this.state.title}
              onChange={this.onChangeTitle}
            />
          </div>
          <div className="form-group">
            <label>Description: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
            />
          </div>

          <div className="form-group">
            <input
              type="submit"
              value="Create Habit"
              className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
            />
          </div>
        </form>
      </div>
    );
  }
}
