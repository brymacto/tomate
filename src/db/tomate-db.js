import { app } from "electron";
import path from "path";
import low from "lowdb";

const db = low(path.join(app.getPath("appData"), "/tomate/tomate_db.json"));

export default {
  createDbIfEmpty: () => {
    db.defaults({ pastPomodoros: [] })
      .write();
  },

  getPastPomodoros: () => {
    db.getState("pastPomodoros");
  },
};
