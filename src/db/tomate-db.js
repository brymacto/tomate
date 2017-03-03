import { remote } from "electron";
import path from "path";
import low from "lowdb";

const db = low(path.join(remote.app.getPath("appData"), "/tomate/tomate_db.json"));
db._.mixin(require("lodash-id"));

export default {
  createDbIfEmpty: () => {
    db.defaults({ pastPomodoros: [] })
      .write();
  },

  getPastPomodoros: () => {
    createDbIfEmpty();
    db.getState("pastPomodoros");
  },

  addPastPomodoro: (pastPomodoro) => {
    createDbIfEmpty();
    return db.get("pastPomodoros").insert(pastPomodoro).write().id;
  },
};

function createDbIfEmpty() {
  db.defaults({ pastPomodoros: [] })
    .write();
}

