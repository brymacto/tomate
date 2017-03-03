import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import actions from "../actions";
import CurrentPomodoro from "../components/CurrentPomodoro";
import withPauseDetails from "../projectors/withPauseDetails";

class PomodorosContainer extends Component {
  static propTypes = {
    currentPomodoro: PropTypes.object.isRequired,
    pastPomodoros: PropTypes.array.isRequired,
    changeCurrentGoal: PropTypes.func.isRequired,
    changeCurrentResult: PropTypes.func.isRequired,
    startPomodoro: PropTypes.func.isRequired,
    pausePomodoro: PropTypes.func.isRequired,
    restartPomodoro: PropTypes.func.isRequired,
    finishPomodoro: PropTypes.func.isRequired,
  };

  render() {
    const {
      currentPomodoro,
      changeCurrentGoal,
      changeCurrentResult,
      startPomodoro,
      pausePomodoro,
      restartPomodoro,
      finishPomodoro,
      pastPomodoros,
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
          onFinish={finishPomodoro}
        />

        {
          pastPomodoros.map(pastPomodoro =>
            <p key={pastPomodoro.startedAt}>
              Goal: { pastPomodoro.goal }<br />
              Result: { pastPomodoro.result }<br />
              Length in minutes: { pastPomodoro.lengthInMinutes }
            </p>
          )
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentPomodoro: withPauseDetails(state.currentPomodoro, new Date()),
    pastPomodoros: state.pastPomodoros,
  };
}

export default connect(mapStateToProps, actions)(PomodorosContainer);
