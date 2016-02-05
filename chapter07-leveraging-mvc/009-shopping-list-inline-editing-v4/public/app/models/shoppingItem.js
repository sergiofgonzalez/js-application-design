"use strict";

/*
  The model is used to track changes at the individual level, perform
  validation and computation.
*/

var Backbone = require("backbone");


/*
  Added validation to the model:
  If the validation fails, the model won't be changes and instead a validationError
  property will be set on the model with the contents of the returned string.
*/

module.exports = Backbone.Model.extend({
  validate: function(attrs) { /* include user input validation */
    if (!attrs.name) {
      return "Please enter the name of the item";
    }
    if (typeof attrs.quantity !== "number" || isNaN(attrs.quantity)) {
      return "The quantity must be numeric!";
    }
    if (attrs.quantity < 1) {
      return "You should keep your groceries to yourself";
    }
  },
  addToOrder: function(quantity) { /* helper method that adds the given amount to the existing one */
    this.set("quantity", this.get("quantity") + quantity, {validate: true}); /* include vall to validate */
  }
});
