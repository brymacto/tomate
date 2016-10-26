import React from "react";
import { render } from "react-dom";

window.onload = init;

function init() {
  render((
    <div>
      Hello, world!
    </div>
  ), document.getElementById("root"));
}