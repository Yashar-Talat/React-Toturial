import React, { Component } from "react";

export default class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
    setInterval(this.tiktak.bind(this,1000));
  }

  render() {
    return (
      <div>
        <p>Hello Yashar Talat</p>
        <p>Time is {this.state.date.toLocaleTimeString()}</p>
      </div>
    );
  }

  tiktak() {
    this.setState({
      date: new Date()
    });
  }
}
