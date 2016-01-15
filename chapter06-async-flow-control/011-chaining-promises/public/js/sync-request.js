/* exported syncRequestToGitHub */
"use strict";

var syncRequestToGitHub = (function() {

  return function() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.github.com/users");

    xhr.addEventListener("load", function loaded() {
      if (xhr.status >= 200 && xhr.status < 300) {
        console.log("STATUS:", xhr.status);
        var users = JSON.parse(xhr.responseText);
        var user = users[0];
        console.log("user", user.login);
        console.log("user.repos_url", user["repos_url"]); /* jshint ignore: line */
      } else {
        console.log("ERROR:", xhr.status);
        console.log(xhr.statusText);
      }
    });

    xhr.addEventListener("error", function errored() {
      console.log("ERROR:", xhr.status);
      console.log(xhr.statusText);
    });

    xhr.send();
  };
})();
