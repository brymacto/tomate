import reduce from "lodash/reduce";

export default function withTimeRemaining(pomodoro) {
  const secondsPaused = reduce(pomodoro.pauses, (sum, pause) => {
    if (pause.endedAt) {
      return (sum + ((pause.endedAt - pause.startedAt) / 1000));
    }
    return sum;
  }, 0);

  return Object.assign(pomodoro, { secondsPaused });
}
