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

    it("pauses the pomodoro", () => {
      const prevState = {
        currentPomodoro: {
          pauses: []
        }
      };

      const pauseStartDate = new Date("01 Jan 2017 12:01:00 EST");

      const action = {
        type: ActionTypes.PAUSE_POMODORO,
        payload: {
          dateTime: pauseStartDate
        }
      };

      const nextState = pomodorosReducer(prevState, action);

      expect(nextState.currentPomodoro.pauses).to.include(
        {
          startedAt: pauseStartDate,
        }
      );
    });

    it("restarts the pomodoro", () => {
      const pauseStartDate = new Date("01 Jan 2017 12:01:00 EST");
      const prevState = {
        currentPomodoro: {
          pauses: [
            {
              startedAt: "foo",
              endedAt: "bar",
            },
            {
              startedAt: pauseStartDate,
            }
          ]
        }
      };

      const pauseEndDate = new Date("01 Jan 2017 12:02:00 EST");

      const action = {
        type: ActionTypes.RESTART_POMODORO,
        payload: {
          dateTime: pauseEndDate
        }
      };

      const nextState = pomodorosReducer(prevState, action);

      expect(nextState.currentPomodoro.pauses).to.include(
        {
          startedAt: pauseStartDate,
          endedAt: pauseEndDate,
        }
      );
    });
  });
})
;

