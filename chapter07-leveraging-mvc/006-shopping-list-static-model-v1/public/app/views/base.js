"use strict";

var Backbone = require("backbone");
var Mustache = require("mustache");

/*
  To easily render Mustache templates in your views and avoid repetition,
  we wire up a base view.
  The rest of the views will extend this one, allowing you to add functionality
  that gets shared across every view.
  Note also that if a view needs to be rendered in another way, it's ok to
  override the `render` method again.
*/

module.exports = Backbone.View.extend({
  render: function() {
    this.el.innerHTML = Mustache.to_html(this.template, this.viewModel);
  }
});
