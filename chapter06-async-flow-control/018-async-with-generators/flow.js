"use strict";

module.exports = flow;

function flow(generator) {
  // create an iterator on the provided generator, passing our `flow.next` method
  var iterator = generator(next);

  // jump-start the generator
  next();

  function next(err, result) {
    if (err) {
      iterator.throw(err);
    }

    // resume execution of the generator, execute until next yield or completion
    var item = iterator.next(result);

    // if we reached the end of the generator, return immediately
    if (item.done) {
      return;
    }

    // if a function was yielded, invoke it passing it the next object
    // otherwise:
    //  + we count on the consumer calling `next`
    if (typeof item.value === "function") {
      item.value(next);
    }
  }
}
