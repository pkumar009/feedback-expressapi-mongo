const mongoose = require("mongoose");

const userfeedback = mongoose.model(
  "userfeedback",
  new mongoose.Schema({
    receiver_id: String,
    //receiver_email: String,
    description: String
  })
);

module.exports = userfeedback;