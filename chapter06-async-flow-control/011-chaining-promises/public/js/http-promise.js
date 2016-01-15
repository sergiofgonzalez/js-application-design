/* exported get */
"use strict";

var get = function(endpoint) {

  function handler(fulfill, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", endpoint);
    xhr.send();

    xhr.addEventListener("load", function loaded() {
      if (xhr.status >= 200 && xhr.status < 300) {
        fulfill(xhr.response);
      } else {
        reject(new Error(xhr.responseText));
      }
    });

    xhr.addEventListener("error", function errored() {
      reject(new Error("Network Error"));
    });
  }

  return new Promise(handler);
};
