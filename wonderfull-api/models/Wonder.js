const mongoose = require("mongoose");
const { Schema, model } = mongoose;
/* 
name
creator id
map location (coordinates)
country
state
type of wonder
rate
description
gallery
tags
better at
months
schedule
price and currency
recommendations
highlights
prohibited
testimonials
website
phone
mail
*/





/* 
map location (coordinates)
country
state
type of wonder
rate
tags
better at
months
schedule
price and currency
recommendations
highlights
prohibited
testimonials
website
phone
mail
*/

const wonderSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true
    },
    whoRecommends: {
      type: [Schema.Types.ObjectId],
      ref: "User"
    },
    images: {
      type: [String],
      minlength: 1,
      required: true
    },
    description: {
      type: String,
      minlength: 50,
      required: true
    },



    location: {
      country: {
        type: String,
        required: true
      },
      city: String,
      address: String
    },
    tags: {
      type: [ String ],
      default: ["travel", "nature"]
    },
    price: {
      coin: String,
      value: Number,
      default: 0.00
    },
    rate: {
      type: Number,
      required: true,
    }
    creator: {
      /* TA's validation needed */
      type: Schema.Types.ObjectId,
      /* User: Who gave the recommendation, Sponsor: paid with sponsor name displayed, Ghost: sponsor paid with false user name */
      enum: ["user", "sponsor", "ghost"],
      ref: "User",
      required: true
    },
    schedule: {
      from: {
        type: Number,
        minlength: 0,
        default: 0
      }
      to: {
        type: Number,
        maxlength: 24,
        default: 24
      }
    },
    review: {
      type: String,
      /* We need here User ID, User img, the comment and place given rate */ 
    },
    highlights: {
      /* Example: Better at night, don't forget sunblock, pet friendly */
      type: [ String],
      default: "No highlights provided yet"
    },
    prohibitions: {
      /* Example: No weapons allowed, no kids allowed, no cameras. */
      type: [ String ],
      default: "This site has no prohibitions"
    },
    category: {
      /* Urban, explore, nature... */
      type : [ String ],
      default: [ "nature" ]
    },
    contact: {
      website: String,
      phone: Number,
      mail: String,
    },
    betterAt: {
      /* Better months to visit. Ex: June, July */
      type: [String],
      default: "All year"
    },
  },
  { 
    timestamps: true 
  }
);

module.exports = model("Wonder", wonderSchema);

/*
VALIDATION TYPES:
type: String, Number, Boolean
default: Anything,
required: true
unique: true
enum: array  EXAMPLE: enum: ['white', 'black', 'brown']
min: number
max: number
minlenght: number
maxlenght: number
trim: true (adds a trim setter)
lowercase: true (adds a lowercase setter)
match: a regex (sets a regex valiator)  EXAMPLE: match: /^[A-Z]{2}$/ 
validate: object (adds custom validator)
set: function (adds custom setter)
*/
