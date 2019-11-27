const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const reviewSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    review: {
      type: String,
      minlength: 20,
      required: true
    },
    rate: {
      type: Number,
      required: true,
      default: 5
    }
  },
  { timestamps: true }
);

module.exports = model("Review", reviewSchema);
