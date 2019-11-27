const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const favoritesSchema = new Schema(
  {
    favoriteWonders: {
      type: [Schema.Types.ObjectId],
      ref: "Wonder"
    }
  },
  {
    timestamps: true
  }
);

module.exports = model("Favorites", favoritesSchema);
