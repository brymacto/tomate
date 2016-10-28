const actionCreators = {
  changeCurrentGoal: (goal) => ({
    type: "CURRENT_POMODORO/CHANGE_CURRENT_GOAL",
    payload: {
      goal
    }
  })
};

export default actionCreators;
