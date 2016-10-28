import React, { Component, PropTypes } from "react";

const pomodoroPropTypes = {
  goal: PropTypes.string,
  result: PropTypes.string,
  startedAt: PropTypes.string,
};

class OrderQuantityField extends Component {
  static propTypes = {
    currentPomodoro: PropTypes.shape(pomodoroPropTypes).isRequired,
  };

  render() {
    const {
      currentPomodoro
    } = this.props;

    return (
      <div>
        Goal: { currentPomodoro.goal }<br />
        Result: { currentPomodoro.result }<br />
        Started at: { currentPomodoro.startedAt }<br />
      </div>
    );
  }
}
export default OrderQuantityField;

