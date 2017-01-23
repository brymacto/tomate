import { expect } from "chai";
import withSecondsPaused from "../../src/projectors/withSecondsPaused";

describe("with time remaining projector", () => {
  it("adds the time remaining to the pomodoro", () => {
    const pomodoro = {
      pauses: [
        {
          startedAt: new Date("01 Jan 2017 12:03:00 EST"),
          endedAt: new Date("01 Jan 2017 12:03:33 EST"),
        },
        {
          startedAt: new Date("01 Jan 2017 12:05:00 EST"),
        }
      ],
    };

    const result = withSecondsPaused(pomodoro);

    expect(result.secondsPaused).to.equal(33);
  });

  it("handles pomodoros with no pauses", () => {
    const pomodoro = {
      pauses: [],
    };

    const result = withSecondsPaused(pomodoro);

    expect(result.secondsPaused).to.equal(0);
  });
});
