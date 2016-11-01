import { ActionTypes } from "../constants";

const actionCreators = {
  changeCurrentGoal: (goal) => ({
    type: ActionTypes.CHANGE_CURRENT_GOAL,
    payload: {
      goal
    }
  }),
  changeCurrentResult: (result) => ({
    type: ActionTypes.CHANGE_CURRENT_RESULT,
    payload: {
      result
    }
  })
};

export default actionCreators;
