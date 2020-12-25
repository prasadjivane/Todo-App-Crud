const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Todos = new Schema(
  {
    task: {
      type: String,
    },
  },
  {
    collection: "todo",
  }
);

module.exports = mongoose.model("Todos", Todos);
