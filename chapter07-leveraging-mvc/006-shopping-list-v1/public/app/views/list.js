"use strict";

var fs = require("fs");
var base = require("./base.js");
var template = fs.readFileSync(__dirname + "/templates/list.mu", { encoding: "utf8" });

module.exports = base.extend({
  el: ".view",    /* target element: the `<div>` marked with class="view" in `index.html` */
  template: template, /* The `list.mu` Mustache template in `/views` */
  viewModel: {    /* viewModel definition => referenced in the Mustache template, an in the base view `render` method */
    shopping_list: [
        { name: "Banana", quantity: 3},
        { name: "Strawberry", quantity: 8},
        { name: "Almond", quantity: 34},
        { name: "Chocolate Bar", quantity: 1}
    ]
  },
  initialize: function() {  /* runs when the view is instantiated => will render itself when it's created */
    this.render();  /* calls the base view `render` method */
  }
});
