"use strict";

var test = require("tape");
var sinon = require("sinon");
var maxwell = require("../src/maxwell.js");

test("maxwell.immediate invokes a callback immediately", function (t) {
  var cb = sinon.spy();

  maxwell.immediate(cb);

  /*
    t.plan is used to allows you to define how many assertions you expect to be made
    during the execution of your test case.

    t.plan is used instead of t.end
  */
  t.plan(2);
  t.ok(cb.calledOnce, "called once"); // ensure that immediate called your callback exactly once
  t.ok(cb.calledWith("foo", "bar"), "arguments match expectations");
});

test("maxwell.debounce invokes a callback after a timeout", function (t) {
  /* any subsequent call to setTimeout or setInterval will be faked */
  var clock = sinon.useFakeTimers();
  var cb = sinon.spy();

  maxwell.debounce(cb);

  t.plan(2);
  t.ok(cb.notCalled, "not called until tick");
  clock.tick(0);
  t.ok(cb.called, "called after tick");
});
