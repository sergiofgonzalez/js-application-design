"use strict";

var button = document.querySelector("button");
button.addEventListener("click", function() {
  var div = document.createElement("div");
  div.textContent = "hello, world!";
  document.body.appendChild(div);

  console.log("Printed some text.")
});
