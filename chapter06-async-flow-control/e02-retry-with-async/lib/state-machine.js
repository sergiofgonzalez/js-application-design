"use strict";

var state = "Queued";

module.exports = function () {
  var randVal = Math.random() * 10 + 1;
  if (randVal > 7) {
    switch (state) {
      case "Queued":
        state = "InProgress";
        break;
      case "InProgress":
        state = "Finished";
        break;
    }
  }
  return state;
};
