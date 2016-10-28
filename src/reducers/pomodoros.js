const initialPomodoro = {
  goal: null,
  result: null,
  startedAt: null,
};

const initialState = {
  currentPomodoro: initialPomodoro,
  pastPomodoros: [],
};

export default function pomodoros(state = initialState, _action) {
  return state;
}
