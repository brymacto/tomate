import update from "immutability-helper";
import findIndex from "lodash/findIndex";
import { combineReducers } from "redux";
import { ActionTypes } from "../constants";

const initialPomodoro = {
  goal: "",
  result: "",
  startedAt: null,
  pauses: []
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
    case ActionTypes.START_POMODORO:
      return update(state, { currentPomodoro: { startedAt: { $set: action.payload.dateTime } } });
    case ActionTypes.PAUSE_POMODORO:
      if (isNotPaused(state.currentPomodoro.pauses)) {
        return update(state, { currentPomodoro: { pauses: { $push: [{ startedAt: action.payload.dateTime }] } } });
      }
      return state;
    case ActionTypes.RESTART_POMODORO:
      return update(state, { currentPomodoro: { pauses: { $apply: endCurrentPause } } });
    case ActionTypes.FINISH_POMODORO:
      return update(state, {
        currentPomodoro: { $set: initialPomodoro },
        pastPomodoros: { $push: [state.currentPomodoro] }
      });
    default:
      return state;
  }

  function endCurrentPause(pauses) {
    const currentPauseIndex = findIndex(pauses, pause => (pause.startedAt && !pause.endedAt));

    return update(pauses, { [currentPauseIndex]: { $merge: { endedAt: action.payload.dateTime } } });
  }

  function isNotPaused(pauses) {
    return !pauses.some(pause => (pause.startedAt && !pause.endedAt));
  }
}

export default combineReducers({
  pomodorosReducer
});

