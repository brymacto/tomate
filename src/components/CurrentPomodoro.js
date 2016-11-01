import React, { Component, PropTypes } from "react";

const pomodoroPropTypes = {
  goal: PropTypes.string,
  result: PropTypes.string,
  startedAt: PropTypes.date,
};

class OrderQuantityField extends Component {
  static propTypes = {
    currentPomodoro: PropTypes.shape(pomodoroPropTypes).isRequired,
    onChangeGoal: PropTypes.func.isRequired,
    onChangeResult: PropTypes.func.isRequired,
    onStart: PropTypes.func.isRequired,
  };

  render() {
    const {
      currentPomodoro,
      onChangeGoal,
      onChangeResult,
      onStart,
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

        <button onClick={start}>Start</button>
      </div>
    );
  }
}
export default OrderQuantityField;

