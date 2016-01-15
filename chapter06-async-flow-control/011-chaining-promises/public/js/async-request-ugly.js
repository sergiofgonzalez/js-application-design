/* exported asyncRequestToGitHubUgly */
/* globals get */

"use strict";

/*
  This is an ugly chaining, Harry
  (it works though)
*/
var asyncRequestToGitHubUgly = (function() {
  return function() {
    get("https://api.github.com/users")
      .then(function responseReceived(response) {
        parseResponse(response)
          .then(function printFirstUser(users) {
            console.log(users[0].login);
        });
      })
      .catch(function errorReceived(error) {
        console.log(error);
      });
  };

  function parseResponse(response) {
    return new Promise(function(fulfill, reject) {
      try {
        var obj = JSON.parse(response);
        fulfill(obj);
      } catch (err) {
        reject(err);
      }
    });
  }
})();
