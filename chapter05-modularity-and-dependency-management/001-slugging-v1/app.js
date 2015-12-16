"use strict";

function getSlug(text) {
  var separatorRegexp = /[^a-z0-9]/ig;
  var headingOrTrailingDashRegexp = /^-|-$/g;

  return text
          .replace(separatorRegexp, "-")
          .replace(headingOrTrailingDashRegexp, "")
          .toLowerCase();
}

/* tests */

var sentences = ["Some piece of text",
                 "... Foo Some   Poorly Worded----   -  Text-",
                 "this-is-called-slugging",
                 "001-hello-heroku-node",
                 "-001- world collapsing--",
                 "Cats, Dogs and Zebras!"];

sentences.forEach(function(item) {
  console.log(item, "=>", getSlug(item));
});
