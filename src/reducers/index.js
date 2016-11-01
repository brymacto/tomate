import update from "immutability-helper";
import { combineReducers } from "redux";
import { ActionTypes } from "../constants";

const initialPomodoro = {
  goal: "",
  result: "",
  startedAt: null,
};

const initialState = {
  currentPomodoro: initialPomodoro,
  pastPomodoros: [],
};

export function pomodorosReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.CHANGE_CURRENT_GOAL:
      return update(state, { currentPomodoro: { goal: { $set: action.payload.goal } } });
    case ActionTypes.CHANGE_CURRENT_RESULT:
      return update(state, { currentPomodoro: { result: { $set: action.payload.result } } });
    default:
      return state;
  }
}

export default combineReducers({
  pomodorosReducer
});

