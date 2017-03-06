import tomateDb from "../db/tomate-db";
import { ActionTypes } from "../constants";

const SaveToDb = store => next => (action) => {
  if (action.type === ActionTypes.SAVE_FINISHED_POMODORO) {
    const pastPomodoros = store.getState().pastPomodoros;
    const lastPomodoro = pastPomodoros[pastPomodoros.length - 1];
    tomateDb.addPastPomodoro(lastPomodoro);
  }

  if (action.type === ActionTypes.APP_LOADED) {
    let pastPomodoros = [];

    new Promise(
      (resolve) => {
        pastPomodoros = tomateDb.getPastPomodoros();
        resolve(pastPomodoros);
      }
    ).then(
      pomodoros => store.dispatch(
        {
          type: ActionTypes.LOAD_PAST_POMODOROS,
          payload: pomodoros,
        }
      )
    );
  }

  const result = next(action);
  return result;
};

export default SaveToDb;
