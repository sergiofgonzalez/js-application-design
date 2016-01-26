"use strict";

var Backbone = require("backbone");
Backbone.$ = require("jquery");

var SampleView = Backbone.View.extend({
  el: ".view",
  render: function() {
    this.el.textContent = "foo bar";
  }
});

var sampleView = new SampleView();

sampleView.render();
