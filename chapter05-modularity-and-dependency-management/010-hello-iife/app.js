var api = (function() {
  "use strict";
  var local = 0;

  var publicInterface = {
    counter : function() {
      return local++;
    }
  };

  return publicInterface;
})();


console.log(api.counter());
console.log(api.counter());
console.log(api.local); // -> undefined
