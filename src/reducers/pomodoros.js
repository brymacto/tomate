import update from "immutability-helper";
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

export default function pomodoros(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.CHANGE_CURRENT_GOAL:
      return update(state, { currentPomodoro: { goal: { $set: action.payload.goal } } });
    default:
      return state;
  }
}
