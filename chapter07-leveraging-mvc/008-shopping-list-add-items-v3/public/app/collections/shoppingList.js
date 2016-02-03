"use strict";

/*
  The collection will let you listen for changes to the list.
*/

var Backbone = require("backbone");
var ShoppingItem = require("../models/shoppingItem.js");


/*
  The collection needs a reference to the model, so that the collection knows
  what kind of model to create when inserting objects into the list
*/

module.exports = Backbone.Collection.extend({
  model: ShoppingItem
});
