import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import actions from "../actions";


class PomodorosContainer extends Component {
  static propTypes = {
    foo: PropTypes.string.isRequired,
  };

  render() {
    const {
      foo
    } = this.props;

    return (
      <h1>Pomodoros Container { foo }</h1>
    );
  }
}

function mapStateToProps(state) {
  return { foo: state.foo };
}

export default connect(mapStateToProps, actions)(PomodorosContainer);
