"use strict";

function getSlug(text) {
  var separatorRegexp = /[^a-z0-9]/ig;
  var headingOrTrailingDashRegexp = /^-|-$/g;

  return text
          .replace(separatorRegexp, "-")
          .replace(headingOrTrailingDashRegexp, "")
          .toLowerCase();
}

function getStamp(date) {
  return date.getTime();
}

function getUrl(article) {
  return "/" + getStamp(article.date) + "/" + getSlug(article.title);
}

/*
  tests
*/

/* getSlug */
var sentences = ["Some piece of text",
                 "... Foo Some   Poorly Worded----   -  Text-",
                 "this-is-called-slugging",
                 "001-hello-heroku-node",
                 "-001- world collapsing--",
                 "Cats, Dogs and Zebras!"];

sentences.forEach(function(item, index) {
  console.log(index, ":", item, "=>", getSlug(item));
});
printSeparator();

/* getStamp */
var dates = [ new Date(),
              new Date(2015, 11, 16),    /* 11 is December */
              new Date(2015, 11, 16, 16, 35, 0),
              new Date("2015-12-16T16:00:00.123Z"),
              new Date("2015-12-16T16:00:00.124Z")
            ];
dates.forEach(function(item, index) {
  console.log(index, ":", item, "=>", getStamp(item));
});
printSeparator();

function printSeparator() {
  console.log("======================================");
}

/* getUrl */
var articles = [
  {
    title: "Some piece of text",
    date: new Date()
  },
  {
    title: "... Foo Some   Poorly Worded----   -  Text-",
    date: new Date(2015, 11, 16)
  },
  {
    title: "this-is-called-slugging",
    date: new Date(2015, 11, 16, 16, 35, 0)
  },
  {
    title: "001-hello-heroku-node",
    date: new Date("2015-12-16T16:00:00.123Z")
  },
  {
    title: "-001- world collapsing--",
    date: new Date("2015-12-16T16:00:00.124Z")
  },
  {
    title: "Cats, Dogs and Zebras!",
    date: new Date("2015-12-16T16:00:00.125Z")
  }
];

articles.forEach(function(item, index) {
  console.log(index, ":", item, "=>");
  console.log(getUrl(item));
});
printSeparator();
