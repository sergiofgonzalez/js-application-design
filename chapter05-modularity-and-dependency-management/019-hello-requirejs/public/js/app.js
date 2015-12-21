/* globals require */

require(["lib/text"], function(text) {
  "use strict";
  var result = text("foo bar");
  console.log("result:", result);
});
