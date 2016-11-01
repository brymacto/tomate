export default function deserialize(pomodoro) {

  function toString(date) {
    if (!date) {
      return "";
    }

    return date.toLocaleTimeString(
      "en-US",
      { hour: "numeric", minute: "2-digit" }
    );
  }

  return Object.assign(pomodoro, { startedAt: toString(pomodoro.startedAt) });
}
