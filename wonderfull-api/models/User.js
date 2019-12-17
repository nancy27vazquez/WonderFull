const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: "Username already taken"
    },
    email: {
      type: String,
      unique: true,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    profilepic: {
      type: String,
    },
    userType: {
      type: String,
      enum: ["user", "sponsor", "ghost"],
      default: "user"
    },
    country: {
      type: String
    },
    favorites: {
      type: [Schema.Types.ObjectId],
      ref: "Wonder",
      default: []
    },
    nextTrip: {
      type: [Schema.Types.ObjectId],
      ref: "Wonder",
      default: []
    },
    likedTags: {
      type: [],
      default: ["travel"]
    }
  },
  { timestamps: true }
);

module.exports = model("User", userSchema);
