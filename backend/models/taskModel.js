const mongoose = require("mongoose");

const taskSchema = mongoose.Schema({
  userId: {
    type: String,
  },

  title: {
    type: String,
  },

  content: {
    type: String,
  },
});

module.exports = Task = mongoose.model("Task", taskSchema);
