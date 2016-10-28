import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import pomodoros from "./reducers/pomodoros";
import PomodorosContainer from "./containers/PomodorosContainer";


let store = createStore(pomodoros);

window.onload = init;

function init() {
  render((
    <Provider store={store}>
      <PomodorosContainer></PomodorosContainer>
    </Provider>
  ), document.getElementById("root"));
}