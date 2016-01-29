"use strict";

var Backbone = require("backbone");
var $ = require("jquery");
Backbone.$ = $;

var ViewRouter = require("./routers/viewRouter.js");
new ViewRouter(); /* jshint ignore: line */

$(function () {
  Backbone.history.start();
});
