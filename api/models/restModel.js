'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductSchema = new Schema({
  name: {
    type: String,
    required: 'Please enter the name of the product'
  },
  description: {
    type: String
  },
  image: {
    type: String
  },
  Created_date: {
    type: Date,
    default: Date.now
  }  
});

module.exports = mongoose.model('Products', ProductSchema);