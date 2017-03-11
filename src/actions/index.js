import { ActionTypes } from "../constants";

const actionCreators = {
  changeCurrentGoal: goal => ({
    type: ActionTypes.CHANGE_CURRENT_GOAL,
    payload: {
      goal,
    },
  }),
  changeCurrentResult: result => ({
    type: ActionTypes.CHANGE_CURRENT_RESULT,
    payload: {
      result,
    },
  }),
  startPomodoro: dateTime => ({
    type: ActionTypes.START_POMODORO,
    payload: {
      dateTime,
    },
  }),
  pausePomodoro: dateTime => ({
    type: ActionTypes.PAUSE_POMODORO,
    payload: {
      dateTime,
    },
  }),
  restartPomodoro: dateTime => ({
    type: ActionTypes.RESTART_POMODORO,
    payload: {
      dateTime,
    },
  }),
  finishPomodoro: dateTime => dispatch => (
    new Promise((resolve) => {
      dispatch({
        type: ActionTypes.FINISH_POMODORO,
        payload: {
          dateTime,
        },
      });
      resolve();
    }).then(
      () => dispatch({
        type: ActionTypes.SAVE_FINISHED_POMODORO,
      })
    )
  ),
  tick: dateTime => ({
    type: ActionTypes.TICK,
    payload: {
      dateTime,
    },
  }),
  appLoaded: () => ({
    type: ActionTypes.APP_LOADED,
  }),
};

export default actionCreators;
