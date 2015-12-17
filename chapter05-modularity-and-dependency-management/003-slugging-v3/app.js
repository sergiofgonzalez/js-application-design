"use strict";

function getSlug(text) {
  var separatorRegexp = /[^a-z0-9]+/ig;
  var headingOrTrailingDashRegexp = /^-|-$/g;

  return text
          .replace(separatorRegexp, "-")
          .replace(headingOrTrailingDashRegexp, "")
          .toLowerCase();
}

function getStamp(date) {
  return date.getTime();
}

function filterText(text) {
  var keywordsRegexp = /\b(some|the|by|for|of)\b/ig;
  return text.replace(keywordsRegexp, "");
}

function getUrl(article) {
  return "/" + getStamp(article.date) + "/" + getSlug(filterText(article.title));
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

/* filterText */
var titles = ["this is the year of 2015",
              "no words removed",
              "some of the words removed by the firlter for the sake of SEO",
              "awesome thee bybarnaby"];

titles.forEach(function(item, index) {
  console.log(index, ":", item, "=>", filterText(item));
});
printSeparator();

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
  },
  {
    title: "Some piece of text",
    date: new Date()
  }
];

articles.forEach(function(item, index) {
  console.log(index, ":", item, "=>");
  console.log(getUrl(item));
});
printSeparator();
