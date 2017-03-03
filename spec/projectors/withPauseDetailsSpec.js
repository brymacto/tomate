import { expect } from "chai";
import withPauseDetails from "../../src/projectors/withPauseDetails";

describe("with pause details projector", () => {
  describe("current pause", () => {
    it("is true when pause has not completed", () => {
      const pomodoro = {
        pauses: [
          {
            startedAt: new Date("01 Jan 2017 12:03:00 EST"),
            endedAt: new Date("01 Jan 2017 12:03:33 EST"),
          },
          {
            startedAt: new Date("01 Jan 2017 12:05:00 EST"),
          },
        ],
      };

      const result = withPauseDetails(pomodoro);

      expect(result.currentlyPaused).to.be.true;
    });

    it("is false when no pauses", () => {
      const pomodoro = {
        pauses: [],
      };

      const result = withPauseDetails(pomodoro);

      expect(result.currentlyPaused).to.be.false;
    });

    it("is false when pauses have completed", () => {
      const pomodoro = {
        pauses: [
          {
            startedAt: new Date("01 Jan 2017 12:03:00 EST"),
            endedAt: new Date("01 Jan 2017 12:03:33 EST"),
          },
        ],
      };

      const result = withPauseDetails(pomodoro);

      expect(result.currentlyPaused).to.be.false;
    });
  });

  describe("seconds paused", () => {
    it("adds the seconds paused to the pomodoro", () => {
      const pomodoro = {
        pauses: [
          {
            startedAt: new Date("01 Jan 2017 12:03:00 EST"),
            endedAt: new Date("01 Jan 2017 12:03:33 EST"),
          },
          {
            startedAt: new Date("01 Jan 2017 12:05:00 EST"),
          },
        ],
      };

      const result = withPauseDetails(pomodoro);

      expect(result.secondsPaused).to.equal(33);
    });

    it("handles pomodoros with no pauses", () => {
      const pomodoro = {
        pauses: [],
      };

      const result = withPauseDetails(pomodoro);

      expect(result.secondsPaused).to.equal(0);
    });
  });
});
