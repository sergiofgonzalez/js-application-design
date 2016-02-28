"use strict";

var delay = require("./delay.js");

var randomWords = ["hello", "hola", "allo", "ciao", "konichiwa"];

module.exports = {
  get : function (url) {
    console.log("Retrieving data from ", url);
    delay(2500);

    return randomWords[Math.floor(Math.random() * randomWords.length)];
  }
};
