import { expect } from "chai";
import { ActionTypes } from "../../src/constants";
import { pomodorosReducer } from "../../src/reducers/";

describe("pomodoros reducer", () => {
  describe("managing the current pomodoro", () => {
    it("updates the pomodoro goal", () => {
      const prevState = {
        currentPomodoro: {
          goal: "9",
        },
      };
      const action = {
        type: ActionTypes.CHANGE_CURRENT_GOAL,
        payload: {
          goal: 8,
        },
      };

      const nextState = pomodorosReducer(prevState, action);

      expect(nextState.currentPomodoro.goal).to.equal(8);
    });

    it("updates the pomodoro result", () => {
      const prevState = {
        currentPomodoro: {
          result: "",
        },
      };
      const action = {
        type: ActionTypes.CHANGE_CURRENT_RESULT,
        payload: {
          result: "my result",
        },
      };

      const nextState = pomodorosReducer(prevState, action);

      expect(nextState.currentPomodoro.result).to.equal("my result");
    });

    it("starts the pomodoro", () => {
      const prevState = {
        currentPomodoro: {
          startedAt: new Date(),
        },
      };

      const date = new Date("01 Jan 2017 12:15:10 EST");

      const action = {
        type: ActionTypes.START_POMODORO,
        payload: {
          dateTime: date,
        },
      };

      const nextState = pomodorosReducer(prevState, action);

      expect(nextState.currentPomodoro.startedAt).to.equal(date);
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
            },
          ],
        },
      };

      const pauseEndDate = new Date("01 Jan 2017 12:02:00 EST");

      const action = {
        type: ActionTypes.RESTART_POMODORO,
        payload: {
          dateTime: pauseEndDate,
        },
      };

      const nextState = pomodorosReducer(prevState, action);

      expect(nextState.currentPomodoro.pauses).to.include(
        {
          startedAt: pauseStartDate,
          endedAt: pauseEndDate,
        }
      );
    });

    describe("pausing the pomodoro", () => {
      it("pauses the pomodoro", () => {
        const prevState = {
          currentPomodoro: {
            pauses: [],
          },
        };

        const pauseStartDate = new Date("01 Jan 2017 12:01:00 EST");

        const action = {
          type: ActionTypes.PAUSE_POMODORO,
          payload: {
            dateTime: pauseStartDate,
          },
        };

        const nextState = pomodorosReducer(prevState, action);

        expect(nextState.currentPomodoro.pauses).to.include(
          {
            startedAt: pauseStartDate,
          }
        );
      });

      it("does not pause the pomodoro if it is already paused", () => {
        const prevState = {
          currentPomodoro: {
            pauses: [{
              startedAt: "a date",
            }],
          },
        };

        const pauseStartDate = new Date("01 Jan 2017 12:01:00 EST");

        const action = {
          type: ActionTypes.PAUSE_POMODORO,
          payload: {
            dateTime: pauseStartDate,
          },
        };

        const nextState = pomodorosReducer(prevState, action);

        expect(nextState).to.equal(prevState);
      });
    });

    describe("finishing the pomodoro", () => {
      it("moves the current pomodoro to past pomodoros and records end time and length", () => {
        const prevState = {
          currentPomodoro: { startedAt: 0 },
          pastPomodoros: ["past pomodoro"],
        };

        const action = {
          type: ActionTypes.FINISH_POMODORO,
          payload: { dateTime: 100000 },
        };

        const nextState = pomodorosReducer(prevState, action);

        expect(nextState.pastPomodoros).to.include({ startedAt: 0, endTime: 100000, lengthInMinutes: 2 });
      });

      it("resets the current pomodoro to default", () => {
        const prevState = {
          currentPomodoro: { startedAt: "existing started at value", pauses: ["existing pause"] },
          pastPomodoros: [],
        };

        const action = {
          type: ActionTypes.FINISH_POMODORO,
          payload: {},
        };

        const nextState = pomodorosReducer(prevState, action);

        expect(nextState.currentPomodoro.startedAt).to.equal(null);
        expect(nextState.currentPomodoro.pauses).to.be.empty();
      });
    });
  });
})
;

