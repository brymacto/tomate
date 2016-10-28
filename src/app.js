import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import pomodoros from "./reducers/pomodoros";
import PomodorosContainer from "./containers/PomodorosContainer";



window.onload = init;

function init() {
  const store = createStore(pomodoros, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

  render((
    <Provider store={store}>
      <PomodorosContainer></PomodorosContainer>
    </Provider>
  ), document.getElementById("root"));
}