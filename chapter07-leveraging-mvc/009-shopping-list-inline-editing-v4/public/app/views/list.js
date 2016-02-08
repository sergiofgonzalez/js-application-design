"use strict";

var base = require("./base.js");
var ShoppingList = require("../collections/shoppingList.js");
var ListItemView = require("./listItem.js");

module.exports = base.extend({
  el: ".list-view",    /* target element: the `<div>` marked with class="view" in `index.html` */
  collection: new ShoppingList([ /* now we use the collection property to keep track of the models */
    { name: "Banana", quantity: 3},
    { name: "Strawberry", quantity: 8},
    { name: "Almond", quantity: 34},
    { name: "Chocolate Bar", quantity: 1}
  ]),
  initialize: function() {  /* runs when the view is instantiated => will render itself when it's created */
    this.partials = {};
    this.collection.on("add", this.addItem, this);
    this.collection.on("remove", this.removeItem, this);
    this.collection.models.forEach(this.addItem, this);
  },
  addItem: function(model) {
    var item = new ListItemView({
      model: model,
      collection: this.collection
    });
    this.$el.append(item.el);
    this.partials[model.cid] = item;
  },
  removeItem: function(model) {
    var item = this.partials[model.cid];
    item.$el.remove();
    delete this.partials[model.cid];
  }
});
