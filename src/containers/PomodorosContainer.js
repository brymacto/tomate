import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import actions from "../actions";
import CurrentPomodoro from "../components/CurrentPomodoro";

const pomodoroPropTypes = {
  goal: PropTypes.string,
  result: PropTypes.string,
  startedAt: PropTypes.string,
};

class PomodorosContainer extends Component {
  static propTypes = {
    currentPomodoro: PropTypes.shape(pomodoroPropTypes).isRequired,
    pastPomodoros: PropTypes.arrayOf(PropTypes.shape(pomodoroPropTypes)).isRequired,
    changeCurrentGoal: PropTypes.func.isRequired,
  };

  render() {
    const {
      currentPomodoro,
      changeCurrentGoal,
      pastPomodoros
    } = this.props;

    return (
      <div>
        <h1>Tomate</h1>
        <CurrentPomodoro currentPomodoro={currentPomodoro} onChangeGoal={changeCurrentGoal} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentPomodoro: state.currentPomodoro,
    pastPomodoros: state.pastPomodoros,
  };
}

export default connect(mapStateToProps, actions)(PomodorosContainer);
