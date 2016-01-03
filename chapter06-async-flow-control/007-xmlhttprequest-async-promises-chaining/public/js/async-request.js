(function() {
  "use strict";

  /* The custom helper function for HTTP requests */
  function httpRequest(url) {
    return new Promise(function(succeed, failed) {
      var req = new XMLHttpRequest();
      req.open("GET", url, true);
      req.addEventListener("load", function() {
        if (req.status < 400) {
          succeed(req);
        } else {
          failed(new Error("Request failed: " + req.statusText));
        }
      });
      req.addEventListener("error", function() {
        failed(new Error("Network error"));
      });
      req.send(null);
    });
  }

  function getJsonFromUrl(url) {
    return httpRequest(url)
            .then(function(req) {
              return JSON.parse(req.responseText);
            })
            .then(function(jsonObj) {
              var fruits = jsonObj;
              fruits.forEach(function(fruit) {
                console.log(fruit.name, ":", fruit.color);
              });
              showResults(fruits, null);
            });
  }

  var button = document.querySelector("button");
  button.addEventListener("click", function() {
    showRequestInProgress();
    getJsonFromUrl("http://spark:8080/fruits.json")
      .catch(function(error) {
        showResults(null, error);
      });
  });

  var alertBox = null;
  function showRequestInProgress() {
    alertBox = document.createElement("div");
    alertBox.className = "alert alert-info";
    alertBox.textContent = "HTTP request in progress";
    document.querySelector("#container").appendChild(alertBox);
  }

  function showResults(fruits, error) {
    document.querySelector("#container").removeChild(alertBox);
    if (error) {
      alertBox = document.createElement("div");
      alertBox.className = "alert alert-danger";
      alertBox.textContent = error.message;
      document.querySelector("#container").appendChild(alertBox);
    } else {
      alertBox = document.createElement("div");
      alertBox.className = "alert alert-success";
      fruits.forEach(function(fruit) {
        alertBox.textContent += fruit.name + ":" + fruit.color + ", ";
      });
      document.querySelector("#container").appendChild(alertBox);
    }
  }
})();
