import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import pomodorosReducer from "./reducers/pomodoros";
import PomodorosContainer from "./containers/PomodorosContainer";



window.onload = init;

function init() {
  const store = createStore(pomodorosReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

  render((
    <Provider store={store}>
      <PomodorosContainer />
    </Provider>
  ), document.getElementById("root"));
}