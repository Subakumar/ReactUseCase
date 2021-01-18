import React, { Component } from 'react';


class Forms extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            age: null
        }
    }
    uservalue = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({
            [name]: value
        });
    }
    render() {
        return (
            <form>
                <h1> Controlled Inputs: </h1>
                <h1> Hello {this.state.username}</h1>
                <h2> Your Age is{this.state.age}</h2>
        Enter your Name: <input type="text" value={this.state.username} name="username" onChange={this.uservalue} /><br>
                </br>
        Enter your age: <input type="text" name="age" onChange={this.uservalue} />
                <br></br>
                <button> Submit</button>
            </form>
        )
    }
} export default Forms