const actionCreators = {
  changeCurrentGoal: (goal) => ({
    type: "CHANGE_CURRENT_GOAL",
    payload: {
      goal: goal
    }
  })
};

export default actionCreators;
