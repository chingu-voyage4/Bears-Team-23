"use strict"
//mongoose schema for pictures ,
// add/modify accordingly for properties belonging to the documents in the pictures collection
const mongoose = require('mongoose');
const picSchema = mongoose.Schema({
  owner: {
            ip           : String,
            displayName  : String,
            username     : String,
            authService  : String
  },
  imgDescription:String,
  petName: String, // could be pet name for instance ?
  imgLink:String, // cloudinary link
  timeStamp: Number, //capture pic creation date/time
  totalRatings: Number, //increment up one on every rating
  avgRating: Number, // = ((avgRating * totalRatings) + currentRating) / (totalRatings + 1)
  voted:[String]
});

module.exports = mongoose.model('Picture',picSchema);
