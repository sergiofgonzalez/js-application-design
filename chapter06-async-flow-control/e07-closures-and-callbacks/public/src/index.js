"use strict";

var fairestOfThemAll;
function changeValueDeferred() {
  fairestOfThemAll = "Queen";

  setTimeout(function () {
    fairestOfThemAll = "Snow White";
    return false;
  }, 5000);

  return true;
}

var result = changeValueDeferred();
setInterval(function () {
  console.log("Who's the fairest of them all?", fairestOfThemAll, result);
}, 500);
