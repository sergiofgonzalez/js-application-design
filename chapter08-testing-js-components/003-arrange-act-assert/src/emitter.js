"use strict";

module.exports = function (thing) {

  var events = {};

  /* if the caller doesn't provide an object, assign a new one to you */
  if (!thing) {
    thing = {};
  }

  /* attach an event listener to an event type */
  thing.on = function (type, listener) {
    /* Did the event type previously exist? */
    if (!events[type]) {
      /* the type did not previously exist */
      events[type] = [listener];
    } else {
      /* the type previously existed */
      events[type].push(listener);
    }
  };

  /* fire events synchronously */
  thing.emit = function (type) {
    var evt = events[type];
    if (!evt) {
      return;
    }
    /* get rid of the first argument (the event type) */
    var args = Array.prototype.slice.call(arguments, 1);
    for (var i = 0; i < evt.length; i++) {
      evt[i].apply(thing, args);
    }
  };

  /* return the object received or the recently created one */
  return thing;

};
