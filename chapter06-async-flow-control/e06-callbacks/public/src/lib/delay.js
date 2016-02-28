"use strict";

module.exports = function delay(atLeastMillis) {

  var target = new Date().getTime() + atLeastMillis;
  while (new Date() < target) {
    // noop
  }

};
