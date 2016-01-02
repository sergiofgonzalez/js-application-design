(function() {
  "use strict";

  var model = {
    endpoint: {
      host: "spark",
      port: "8080",
      path: "data.txt"
    }
  };

  var app = angular.module("app", []);

  app.controller("AppCtrl", function() {
    this.appModel = model;

    this.buttonClicked = false;

    this.errorPreparingRequest = false;

    this.submitSyncHttpRequest = function() {
      this.buttonClicked = true;
      this.errorPreparingRequest = false;
      var req = new XMLHttpRequest();
      req.open("GET", "http://" + model.endpoint.host + ":" + model.endpoint.port + "/" + model.endpoint.path, false);
      try {
        req.send(null);
      } catch (error) {
        console.log("An error was caught while sending the request:", error);
        this.errorPreparingRequest = true;
        this.error = error.message;
        return;
      }

      this.response = {
        text: req.responseText.slice(0, 80),
        status: {
          code: req.status,
          message: req.statusText
        }
      };
    };
  });

})();
