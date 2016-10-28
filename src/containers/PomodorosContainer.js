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
  };

  render() {
    const {
      currentPomodoro,
      pastPomodoros
    } = this.props;

    return (
      <div>
        <h1>Tomate</h1>
        <CurrentPomodoro currentPomodoro={currentPomodoro}/>
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
