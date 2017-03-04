import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import ReduxThunk from "redux-thunk";
import SaveToDb from "./middlewares/save-to-db";
import { pomodorosReducer } from "./reducers";
import PomodorosContainer from "./containers/PomodorosContainer";

window.onload = init;

function init() {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(pomodorosReducer, composeEnhancers(applyMiddleware(ReduxThunk, SaveToDb)));

  render((
    <Provider store={store}>
      <PomodorosContainer />
    </Provider>
  ), document.getElementById("root"));
}
