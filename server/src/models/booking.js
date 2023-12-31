const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  status: {
    required: true,
    type: String,
    default: "Pending",
  },
  name: {
    required: true,
    type: String,
  },
  email: {
    required: true,
    type: String,
  },
  phone: {
    required: true,
    type: Number,
  },
  adults: {
    required: true,
    type: Number,
  },
  kids: {
    required: true,
    type: Number,
  },
  bookingDate: {
    required: true,
    type: String,
  },
  bookingTime: {
    required: true,
    type: String,
  },
  note: {
    type: String,
  },
  since: {
    type: Date,
    default: Date.now,
  },
  lastUpdate: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Booking", dataSchema);
