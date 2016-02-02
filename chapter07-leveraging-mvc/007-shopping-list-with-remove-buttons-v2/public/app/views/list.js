"use strict";

var fs = require("fs");
var base = require("./base.js");
var template = fs.readFileSync(__dirname + "/templates/list.mu", { encoding: "utf8" });
var ShoppingList = require("../collections/shoppingList.js");

module.exports = base.extend({
  el: ".view",    /* target element: the `<div>` marked with class="view" in `index.html` */
  template: template, /* The `list.mu` Mustache template in `/views` */
  collection: new ShoppingList([ /* now we use the collection property to keep track of the models */
    { name: "Banana", quantity: 3},
    { name: "Strawberry", quantity: 8},
    { name: "Almond", quantity: 34},
    { name: "Chocolate Bar", quantity: 1}
  ]),
  initialize: function() {  /* runs when the view is instantiated => will render itself when it's created */
    this.collection.on("remove", this.updateView, this);
    this.updateView();
  },
  updateView: function() { /* in this method we set the viewModel property dynamically */
    this.viewModel = {
      shopping_list: this.collection.toJSON()
    };
    this.render();
  },
  events: {
    "click .remove": "removeItem" /* trigger call to removeItem when a click is detected on an elem with class="remove" */
  },
  removeItem: function(e) {
    var name = e.target.dataset.name;   /* find value of data-name of the clicked element */
    var model = this.collection.findWhere({name: name}); /* filter elems of the collection */
    this.collection.remove(model); /* remove item from the collection */
  }
});
