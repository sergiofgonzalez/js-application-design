"use strict";
/*
  Fn = 0, if n = 0
       1, if n = 1
       Fn-1 + Fn-2, if n > 1
*/

function* fibonacci() {
  /* n = 0 */
  yield 0;

  /* n = 1 */
  yield 1;

  /* n > 1 */
  var fn1 = 1;
  var fn2 = 0;
  while (true) {
    yield fn1 + fn2;
    var fn = fn1 + fn2;
    fn2 = fn1;
    fn1 = fn;
  }
}

var iterator = fibonacci();
console.log("Fib0:", iterator.next().value);
console.log("Fib1:", iterator.next().value);
console.log("Fib2:", iterator.next().value);
console.log("Fib3:", iterator.next().value);
console.log("Fib4:", iterator.next().value);
console.log("Fib5:", iterator.next().value);

for (var i = 5; i <= 10; i++) {
  var item = iterator.next();
  console.log("Fib" + i + ": " + item.value);
}
