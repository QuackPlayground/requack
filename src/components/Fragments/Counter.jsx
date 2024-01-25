/* eslint-disable no-unused-vars */

import React from "react";

class Counter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        }
        console.log("constructor");
    }

    componentDidMount() {
        this.setState({ count: 1 });
        console.log("componentDidMount")
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate");
        if(this.state.count === 50) {
            this.setState({count: 0});
        }
    }


    render() {
        return (
            <div className="flex items-center">
                <h1 className="mr-5">{this.state.count}</h1>
                <button className="p-3 text-white bg-black" onClick={() => this.setState({count: this.state.count + 1})}>+</button>
                {console.log("render")}
            </div>
        )
    }
}

export default Counter;