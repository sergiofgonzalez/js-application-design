"use strict";

var Backbone = require("backbone");
var binary = require("../services/binary.js");

module.exports = Backbone.Model.extend({
  getBinary: function() {
    var raw = this.get("raw");
    var bin = binary.fromString(raw);
    if (bin.length > 20) {
      return bin.substr(0, 20) + "\u2026";
    } else {
      return bin;
    }
  },
  isLink: function() {
    var link = /^https?:\/\/.+/i;
    var raw = this.get("raw");
    return link.test(raw);
  }
});
