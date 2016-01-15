/* global syncRequestToGitHub, asyncRequestToGitHubUgly, asyncRequestToGitHubPretty */

(function() {
  "use strict";

  var btnSync = document.querySelector("#btnSync");
  btnSync.addEventListener("click", function handleClick() {
    syncRequestToGitHub();
  });

  var btnAsyncUgly = document.querySelector("#btnAsyncUgly");
  btnAsyncUgly.addEventListener("click", function handleClick() {
    asyncRequestToGitHubUgly();
  });

  var btnAsyncPretty = document.querySelector("#btnAsyncPretty");
  btnAsyncPretty.addEventListener("click", function handleClick() {
    asyncRequestToGitHubPretty();
  });



})();
