import { ActionTypes } from "../constants";

const actionCreators = {
  changeCurrentGoal: (goal) => ({
    type: ActionTypes.CHANGE_CURRENT_GOAL,
    payload: {
      goal
    }
  })
};

export default actionCreators;
