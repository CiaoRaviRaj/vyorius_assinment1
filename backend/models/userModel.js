const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  firstName: {
    type: String,
  },

  lastName: {
    type: String,
  },

  collegeName: {
    type: String,
  },
  phone: {
    type: Number,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  created_data: {
    type: Date,
    default: Date.now,
  },
});

module.exports = User = mongoose.model("User", userSchema);
