import React, { Component, PropTypes } from "react";

const pomodoroPropTypes = {
  goal: PropTypes.string,
  result: PropTypes.string,
  startedAt: PropTypes.string,
};

class OrderQuantityField extends Component {
  static propTypes = {
    currentPomodoro: PropTypes.shape(pomodoroPropTypes).isRequired,
    onChangeGoal: PropTypes.func.isRequired,
  };

  render() {
    const {
      currentPomodoro,
      onChangeGoal
    } = this.props;

    function changeGoal(event) {
      onChangeGoal(event.target.value);
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
          <dd>{ currentPomodoro.result }</dd>
          <dt>Started at</dt>
          <dd>{ currentPomodoro.startedAt }</dd>
        </dl>
      </div>
    );
  }
}
export default OrderQuantityField;

