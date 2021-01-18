
import React, { Component } from 'react'

class Condition extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDay: "sunday"
        }
    }

    render() {
        if (this.state.isDay) {
            return (<div>
                <h1> Conditional Rendering:</h1>
           Go to Mall</div>)
        }
        else {
            return (<div>
                <h1> Conditional Rendering</h1>
             Go to office</div>)

        }

    }
}
export default Condition