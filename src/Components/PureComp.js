
import React, { PureComponent } from 'react'


class PureComp extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            name: "React"
        }
    }
    clicked = () => {
        this.setState({ name: "React JS" })
    }

    render() {
        console.log("Hello Rendered")
        return (

            <div>
                <h1> Pure Components:</h1>
     Hello{this.state.name} <br></br>
                <button onClick={this.clicked}> Click me</button>
            </div>
        )
    }
}
export default PureComp