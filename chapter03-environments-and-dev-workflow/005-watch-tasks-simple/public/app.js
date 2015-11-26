"use strict";

var userMessages = require("./user_messages.js");

userMessages.messages.forEach(function(message) {
  console.log(message.name, "says", message.text);
});

console.log(">> DONE!!");
