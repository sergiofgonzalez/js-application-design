/*
  This file defines a module which has no dependecies on other modules

  The module exposes the public API by returning a function.
*/

/* globals define */
define([], function() {
  "use strict";
  return function(input) {
    return input.toUpperCase();
  };
});
