"use strict";

function emitter(thing) {
  var events = {};

  /* if you don't provide and object, assign a new one to you */
  if (!thing) {
    thing =  {};
  }

  /* attach an event listener to an event type */
  thing.on = function on(type, listener) {
    if (!events[type]) {
      /* the type did not previously exist */
      events[type] = [listener];
    } else {
      /* the type previously existed */
      events[type].push(listener);
    }
  };

  /* fire the event synchronously */
  thing.emit = function(type) {
    var eventListeners = events[type];
    if (!eventListeners) {
      return;
    }
    /* get rid of first argument (the event type)*/
    var args = Array.prototype.slice.call(arguments, 1);

    for (var i = 0; i < eventListeners.length; i++) {
      eventListeners[i].apply(thing, args);
    }
  };

  /* return the object received or the recently created one */
  return thing;
}


module.exports = emitter;
