const mongoose = require('./db');

const Room = mongoose.model('Rooms', new mongoose.Schema({
  per_night: Number,
  booked_dates: {},
  reviews: [
    {
      text: String,
      userImg: String,
      createdAt: Date
    }
  ]
}, { timestamps: true }));

module.exports = Room;