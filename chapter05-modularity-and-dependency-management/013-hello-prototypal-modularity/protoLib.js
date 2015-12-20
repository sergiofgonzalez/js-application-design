var libApi = (function() {
  "use strict";
  /* private state */
  var lastId = 0;
  var data = {};

  /* construction of Lib instances */
  function Lib() {
    this.id = ++lastId;
    data[this.id] = {
      thing: "secret"
    };
  }

  Lib.prototype.getPrivateThing = function() {
    return data[this.id].thing;
  };

  return Lib;
})();

var myLib1 = new libApi();
console.log(myLib1.getPrivateThing());
console.log(myLib1.lastId); // undefined
console.log(myLib1.data);   // undefined
