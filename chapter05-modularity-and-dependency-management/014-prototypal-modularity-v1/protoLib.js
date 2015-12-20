/* globals Lib */

(function(window) {
  "use strict";
  var lastId = 0;

  function Lib() {
    Object.defineProperty(this, "id", {
      value: lastId++
    });
  }

  Object.defineProperty(Lib.prototype, "version", {
    get: function() {
      return "1.0.0";
    }
  });

  window.Lib = Lib;
})(window);

var myLib = new Lib();
console.log(myLib.id);
console.log(myLib.version);
myLib.version = "alpha"; // -> ignored: it's a read-only property
console.log(myLib.version);

var myLib2 = new Lib();
console.log(myLib.id);
console.log(myLib2.id);
