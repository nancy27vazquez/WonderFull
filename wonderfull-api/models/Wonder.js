const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
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
      type: {
        type: String,
        default: "Point"
      },
      address: {
        type: String
      },
      coords: {
        type: [Number]
      }
    },
    /*location: {
      country: String,
      state: String,
      required: true
    },
    coordinates: {
      type: [{ Number }],
      required: true
    },*/
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
    price: {
      type: Number,
      value: Number
    },
    coin: {
      type: String,
      default: "$"
    },
    description: {
      type: String,
      minlength: 50,
      required: true
    },
    tags: {
      type: [String],
      enum: [
        "travel",
        "nature",
        "explore",
        "romantic",
        "familiar",
        "landscape",
        "travel alone",
        "wild"
      ],
      default: ["travel"]
    },
    rate: {
      type: Number,
      required: true,
      default: 5
    },
    highlights: {
      type: String,
      enum: [
        "Sunblock needed",
        "Pet friendly",
        "Long walk",
        "Climbing equipment needed",
        "Small luggage allowed",
        "ID needed",
        "Dangerous at night",
        "Comfortable clothes needed",
        "Winter clothes needed",
        "Rainy place"
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
    superHighlight: {
      type: String,
      required: true,
      unique: true
    },
    website: {
      type: String
    },
    phone: {
      type: Number
    },
    mail: {
      type: String
    },
    transportation: {
      type: String,
      enum: ["Train", "Car", "Walking only", "Bus", "Boat", "Airplane"]
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
