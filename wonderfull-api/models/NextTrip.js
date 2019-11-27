const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const wonderSchema = new Schema(
  {
    wondersList: {
      type: [Schema.Types.ObjectId],
      ref: "Wonder"
    }
  },
  {
    timestamps: true
  }
);

module.exports= ();
