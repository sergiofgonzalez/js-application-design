/* exported asyncRequestToGitHubPretty */
/* globals get */

"use strict";

var asyncRequestToGitHubPretty = function() {
  get("https://api.github.com/users")
    .catch(function errorReceived(error) {
      console.log(error);
    })
    .then(JSON.parse)
    .then(function getFirstUsername(users) {
      console.log("First user received:", users[0].login);
      return users[0].login;
    })
    .then(function getUserRepos(user) {
      console.log("About to get repos for user:", user);
      return get("https://api.github.com/users/" + user.login + "/repos")
              .catch(function errored() {
                console.log("Error accessing user repos!!");
              });
    })
    .then(function parseResponse(response) {
      console.log("Parsing repositories response");
      return JSON.parse(response);
    })
    .then(function printRepos(repos) {
      console.log("============================");
      repos.forEach(function(item, index) {
        console.log(index + ":" + item.name);
      });
    });
};
