import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import actions from "../actions";
import CurrentPomodoro from "../components/CurrentPomodoro";
import withSecondsPaused from "../projectors/withSecondsPaused";

class PomodorosContainer extends Component {
  static propTypes = {
    currentPomodoro: PropTypes.object.isRequired,
    pastPomodoros: PropTypes.array.isRequired,
    changeCurrentGoal: PropTypes.func.isRequired,
    changeCurrentResult: PropTypes.func.isRequired,
    startPomodoro: PropTypes.func.isRequired,
    pausePomodoro: PropTypes.func.isRequired,
    restartPomodoro: PropTypes.func.isRequired,
  };

  render() {
    const {
      currentPomodoro,
      changeCurrentGoal,
      changeCurrentResult,
      startPomodoro,
      pausePomodoro,
      restartPomodoro,
      pastPomodoros
    } = this.props;

    return (
      <div>
        <h1>Tomate</h1>
        <CurrentPomodoro
          currentPomodoro={currentPomodoro}
          onChangeGoal={changeCurrentGoal}
          onChangeResult={changeCurrentResult}
          onStart={startPomodoro}
          onPause={pausePomodoro}
          onRestart={restartPomodoro}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentPomodoro: withSecondsPaused(state.currentPomodoro, new Date()),
    pastPomodoros: state.pastPomodoros,
  };
}

export default connect(mapStateToProps, actions)(PomodorosContainer);
