const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const wonderSchema = new Schema(
  {
    whoRecommends: {
      type: Schema.Types.ObjectId,
      ref: "User"
    },
    wonderName: {
      type: String,
      required: true,
      unique: true
    },
    /* DE MAPBOX BUSCAR */
    location: {
      country: String,
      state: String,
      required: true
    },
    coordinates: {
      type: [{ Number }],
      required: true
    },
    /*MAPBOX */
    images: {
      type: [String],
      minlength: 1,
      required: true
    },
    category: {
      type: String,
      enum: ["MOUNTAIN", "OCEAN", "URBAN", "EXPLORE"],
      required: true
    },
    daytime: {
      type: String,
      enum: ["DAY", "NIGHT"],
      default: "DAY"
    },
    bestDay: {
      type: String,
      enum: [
        "MONDAY",
        "TUESDAY",
        "WEDNESDAY",
        "THURSDAY",
        "FRIDAY",
        "SATURDAY",
        "SUNDAY"
      ],
      required: true
    },
    timeOfTheYear: {
      type: String,
      enum: ["JAN-MAR", "APR-JUN", "JUL-SEPT", "OCT-DEC"],
      default: "Great all year"
    },
    /* BIG QUESTION WITH PRICE & CURRENCY */
    price: {
      type: Number,
      value: Number
    },
    coin: {
      type: String
    },
    /* BIG QUESTION WITH PRICE & CURRENCY */
    description: {
      type: String,
      minlength: 50,
      required: true
    },
    tags: {
      type: [String],
      enum: [],
      default: ["travel", "nature"]
    },
    rate: {
      type: Number,
      required: true,
      default: 5
    },
    highlights: {
      type: String,
      enum: [
        "Don't forget sunblock",
        "Pet friendly",
        "Long walk",
        "Climbing equipment needed",
        "Small luggage bags allowed",
        "May offer products along the way"
      ],
      default: "No highlights provided yet"
    },
    prohibitions: {
      type: String,
      enum: [
        "No kids allowed",
        "No cameras allowed",
        "No pets allowed",
        "No food allowed"
      ]
    },
    contact: {
      website: String,
      phone: Number,
      mail: String
    },
    transportation: {
      type: String,
      enum: ["TRAIN", "CAR", "AIRPORT", "BOAT", "WALKING ONLY"],
      required: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = model("Wonder", wonderSchema);

/* 
creator id
name
map location (coordinates)
country
state
photo/gallery
type of wonder
daytime
months
weekday
price and currency
description
website
phone
mail
neartransportation
rate
tags
recommendation
superhighlights
notallowed
testimonials
*/
