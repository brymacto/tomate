import React, { Component, PropTypes } from "react";
import Countdown from "./Countdown";

const pomodoroPropTypes = {
  goal: PropTypes.string,
  result: PropTypes.string,
  startedAt: PropTypes.date,
  pauses: PropTypes.array.isRequired,
  secondsPaused: PropTypes.number.isRequired,
  currentlyPaused: PropTypes.bool.isRequired,
};

class OrderQuantityField extends Component {
  static propTypes = {
    currentPomodoro: PropTypes.shape(pomodoroPropTypes).isRequired,
    onChangeGoal: PropTypes.func.isRequired,
    onChangeResult: PropTypes.func.isRequired,
    onStart: PropTypes.func.isRequired,
    onPause: PropTypes.func.isRequired,
    onRestart: PropTypes.func.isRequired,
    onFinish: PropTypes.func.isRequired,
    tick: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      tickInterval: null,
    };
  }

  startTicking(dateTime) {
    this.setState({ tickInterval: setInterval(() => this.props.tick(dateTime), 1000) });
  }

  stopTicking() {
    clearInterval(this.state.tickInterval);
  }

  render() {
    const {
      currentPomodoro,
      onChangeGoal,
      onChangeResult,
      onStart,
      onPause,
      onRestart,
      onFinish,
    } = this.props;

    const changeGoal = (event) => {
      onChangeGoal(event.target.value);
    };

    const changeResult = (event) => {
      onChangeResult(event.target.value);
    };

    const start = () => {
      const dateTime = new Date();
      onStart(dateTime);
      this.startTicking(dateTime);
    };

    const pause = () => {
      const dateTime = new Date();
      onPause(dateTime);
      this.stopTicking();
    };

    const restart = () => {
      const dateTime = new Date();
      onRestart(dateTime);
      this.startTicking(dateTime);
    };

    const finish = () => {
      const dateTime = new Date();
      onFinish(dateTime);
      this.stopTicking();
    };

    const startedAt = () => {
      if (!currentPomodoro.startedAt) {
        return "";
      }

      return currentPomodoro.startedAt.toLocaleTimeString(
        "en-US",
        { hour: "numeric", minute: "2-digit" }
      );
    };

    return (
      <div>
        <dl>
          <dt>Goal</dt>
          <dd>
            <input
              value={currentPomodoro.goal}
              onChange={changeGoal}
            />
          </dd>
          <dt>Result</dt>
          <dd>
            <input
              value={currentPomodoro.result}
              onChange={changeResult}
            />
          </dd>
          <dt>Started at</dt>
          <dd>{ startedAt() }</dd>
        </dl>

        <Countdown startedAt={currentPomodoro.startedAt} currentlyPaused={currentPomodoro.currentlyPaused} secondsPaused={currentPomodoro.secondsPaused} />

        <button onClick={start} disabled={currentPomodoro.startedAt}>Start</button>
        <button onClick={pause} disabled={!currentPomodoro.startedAt || currentPomodoro.currentlyPaused}>Pause</button>
        <button onClick={restart} disabled={!currentPomodoro.startedAt || !currentPomodoro.currentlyPaused}>Restart</button>
        <button onClick={finish} disabled={!currentPomodoro.startedAt}>Finish</button>
      </div>
    );
  }
}
export default OrderQuantityField;

