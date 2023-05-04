import React, { Component } from "react";

export default class Clock extends Component {
  render() {
    return (
      <div>
        <p>Hello Yashar Talat</p>
        <p>Time is {new Date().toLocaleTimeString()}</p>
      </div>
    );
  }
}
