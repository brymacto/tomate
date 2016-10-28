import { expect } from "chai";
import { ActionTypes } from "../../src/constants";
import pomodorosReducer from "../../src/reducers/pomodoros";

describe("pomodoros reducer", () => {
  describe("managing the current pomodoro", () => {
    it("updates the pomodoro goal", () => {
      const prevState = {
        currentPomodoro: {
          goal: "9"
        }
      };
      const action = {
        type: ActionTypes.CHANGE_CURRENT_GOAL,
        payload: {
          goal: 8
        }
      };

      const nextState = pomodorosReducer(prevState, action);

      expect(nextState.currentPomodoro.goal).to.equal(8);
    });
  });
});

