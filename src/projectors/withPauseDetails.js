import reduce from "lodash/reduce";

export default function withPauseDetails(pomodoro) {
  const secondsPaused = getSecondsPaused(pomodoro);
  const currentlyPaused = getCurrentlyPaused(pomodoro);

  return Object.assign(pomodoro,
    { secondsPaused,
      currentlyPaused,
    }
  );
}

function getSecondsPaused(pomodoro) {
  return reduce(pomodoro.pauses, (sum, pause) => {
    if (pause.endedAt) {
      return (sum + ((pause.endedAt - pause.startedAt) / 1000));
    }
    return sum;
  }, 0);
}

function getCurrentlyPaused(pomodoro) {
  return pomodoro.pauses.some(pause => (pause.startedAt && !pause.endedAt));
}

