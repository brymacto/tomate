import React, { Component, PropTypes } from "react";

class Countdown extends Component {
  static propTypes = {
    startedAt: PropTypes.instanceOf(Date),
  };


  componentDidMount() {
    this.interval = setInterval(updateDisplayTime.bind(this), 1000);

    function updateDisplayTime() {
      this.timer.innerHTML = this.displayTime();
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  displayTime() {
    if (this.props.startedAt) {
      const secondsRemaining = 1500 - ((new Date() - this.props.startedAt) / 1000);

      const minutes = parseInt((secondsRemaining / 60));
      const seconds = parseInt(secondsRemaining - (minutes * 60));
      return `${appendZero(minutes)}:${appendZero(seconds)}`;
    }
    return "25:00";

    function appendZero(int) {
      if (int < 10) {
        return `0${int}`;
      }
      return int.toString();
    }
  }


  render() {
    return (
      <div>
        <div ref={(div) => { this.timer = div; }} />
      </div>
    );
  }
}

export default Countdown;
