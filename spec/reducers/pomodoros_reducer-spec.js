import { expect } from "chai";
import { ActionTypes } from "../../src/constants";
import { pomodorosReducer } from "../../src/reducers/";

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

    it("updates the pomodoro result", () => {
      const prevState = {
        currentPomodoro: {
          result: ""
        }
      };
      const action = {
        type: ActionTypes.CHANGE_CURRENT_RESULT,
        payload: {
          result: "my result"
        }
      };

      const nextState = pomodorosReducer(prevState, action);

      expect(nextState.currentPomodoro.result).to.equal("my result");
    });

    it("starts the pomodoro", () => {
      const prevState = {
        currentPomodoro: {
          startedAt: new Date()
        }
      };

      const date = new Date("01 Jan 2017 12:15:10 EST");

      const action = {
        type: ActionTypes.START_POMODORO,
        payload: {
          dateTime: date
        }
      };

      const nextState = pomodorosReducer(prevState, action);

      expect(nextState.currentPomodoro.startedAt).to.equal(date);
    });
  });
});

