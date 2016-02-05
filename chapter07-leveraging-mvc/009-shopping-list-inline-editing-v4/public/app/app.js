"use strict";

/*
  Application initialization gets done here.
*/

var Backbone = require("backbone");
Backbone.$ = require("jquery");

/*
  Entry point: instantiate the view.

  As you have already included an `initialize` method in the `list.js`
  that will render the view, you only need to instantiate it
*/

var ListView = require("./views/list.js");
var listView = new ListView(); /* jshint ignore: line */

var AddItemView = require("./views/addItem.js");
var addItemView = new AddItemView({collection: listView.collection}); /* jshint ignore: line */
