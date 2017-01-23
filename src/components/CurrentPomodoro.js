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
  };

  render() {
    const {
      currentPomodoro,
      onChangeGoal,
      onChangeResult,
      onStart,
      onPause,
      onRestart,
    } = this.props;

    function changeGoal(event) {
      onChangeGoal(event.target.value);
    }

    function changeResult(event) {
      onChangeResult(event.target.value);
    }

    function start() {
      const dateTime = new Date();
      onStart(dateTime);
    }

    function pause() {
      const dateTime = new Date();
      onPause(dateTime);
    }

    function restart() {
      const dateTime = new Date();
      onRestart(dateTime);
    }

    function startedAt() {
      if (!currentPomodoro.startedAt) {
        return "";
      }

      return currentPomodoro.startedAt.toLocaleTimeString(
        "en-US",
        { hour: "numeric", minute: "2-digit" }
      );
    }

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
      </div>
    );
  }
}
export default OrderQuantityField;

