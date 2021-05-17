import React, { Component } from 'react';
import axios from 'axios';

export default class Create_Habit extends Component {

    constructor(props){
        super(props);
        //making sure that 'this' is defined for the rest of the file.
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: '',
            title: '',
            description: ''
            //lifespan: new Date(),
        }
    }

    componentDidMount(){//this function is ran before the page is loaded, usefull for hardcoding values in 
        this.setState({
            username: 'Kehan Zhang'
        });
    }

    onChangeUsername(e){
        this.setState({
            username: e.target.value
        });
    }
    
    onChangeTitle(e){
        this.setState({
            title: e.target.value
        });
    }

    onChangeDescription(e){
        this.setState({
            description: e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();

        //never create variables in react normally unless only used in a method
        const habit = {
            username: this.state.username,
            title: this.state.title,
            description: this.state.description
        };

        console.log(habit);

        //sending data to the backend
        axios.post("http://localhost:5000/habits/add", habit)
            .then(res => console.log(res.data));

        window.location = "/";
    }

    render() {
        return (//this.onSubmit is called by the form object
            <div>
            <h3>Create New Habit</h3>
            <form onSubmit={this.onSubmit}>
              <div className="form-group"> 
                <label>Title: </label>
                <input  type="text"
                    required
                    className="form-control"
                    value={this.state.title}
                    onChange={this.onChangeTitle}
                    />
              </div>
              <div className="form-group"> 
                <label>Description: </label>
                <input  type="text"
                    required
                    className="form-control"
                    value={this.state.description}
                    onChange={this.onChangeDescription}
                    />
              </div>
      
              <div className="form-group">
                <input type="submit" value="Create Habit" className="btn btn-primary" />
              </div>
            </form>
          </div>
        );
  }
}