import { expect } from "chai";
import deserialize from "../../src/deserializers/pomodoroDeserializer";

describe("pomodoro serializer", () => {
  it("formats the time string", () => {
    const dateTime = new Date("01 Jan 2017 12:15:10 EST");
    const pomodoroState = {
      startedAt: dateTime
    };

    const props = deserialize(pomodoroState);

    expect(props.startedAt).to.equal("12:15 PM");
  });

  it("handles empty startedAt values", () => {
    const pomodoroState = {
      startedAt: null
    };

    const props = deserialize(pomodoroState);

    expect(props.startedAt).to.equal("");
  });
});

