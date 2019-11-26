const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const wonderSchema = new Schema(
  {
    wonder: {
      type: Schema.Types.ObjectId,
      ref: "Wonder",
      required: true
    }
  },
  {
    timestamps: true
  }
);

modu;
