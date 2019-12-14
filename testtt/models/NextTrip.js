const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const nextTripSchema = new Schema(
  {
    nextWonders: {
      type: [Schema.Types.ObjectId],
      ref: "Wonder"
    }
  },
  {
    timestamps: true
  }
);

module.exports = model("NextTrip", nextTripSchema);
