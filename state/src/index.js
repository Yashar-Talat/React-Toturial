import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

function render() {
    return ReactDOM.render(<App />, document.getElementById("root"));
}
setInterval(render,1000);