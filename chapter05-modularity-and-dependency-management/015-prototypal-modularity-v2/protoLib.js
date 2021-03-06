/* globals Lib */

(function(window) {
  "use strict";

  /* these ones are like static variables in OOP */
  var lastId = 0;
  var data = {};

  function Lib() {
    Object.defineProperty(this, "id", {
      value: lastId++
    });

    data[this.id] = "idle";

    this.delay = 3000; // default value for the delay
  }

  Object.defineProperty(Lib.prototype, "version", {
    get: function() {
      return "1.0.0";
    }
  });

  Lib.prototype.getState = function() {
    return data[this.id];
  };

  Lib.prototype.waitForNoReason = function(scheduledAction) {
    data[this.id] = "waiting";
    window.setTimeout(scheduledAction, this.delay);
  };

  window.Lib = Lib;
})(window);

var myLib = new Lib();
console.log(myLib.id);
console.log(myLib.version);
console.log(myLib.getState());
console.log(myLib.delay);
myLib.delay = 5000;
console.log(myLib.delay);
printSeparator();

myLib.waitForNoReason(function() {
  "use strict";
  console.log("Hello, async");
});
console.log(myLib.getState());

function printSeparator() {
  "use strict";
  console.log("==================================================");
}
