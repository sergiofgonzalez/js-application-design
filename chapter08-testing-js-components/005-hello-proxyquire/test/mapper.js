"use strict";

var test = require("tape");
var sinon = require("sinon");
var proxyquire = require("proxyquire");

var user = {
  id: 123,
  name: "Marian",
  email: "marian@company.com",
  employeeNumber: 10112345
};

var mapperMock = {
  "./models/User.js": {
    findOne: function (query, done) {
      /* setTimeout(f) is the same as setTimeout(f, 0) */
      setTimeout(done.bind(null, null, user)); /* done's signature is done(err, results) */
    }
  }
};

test("user mapper returns a subset of user", function (t) {
  var mapper = proxyquire("../src/mapper.js", mapperMock);
  var clock = sinon.useFakeTimers();
  var cb = sinon.spy();

  mapper(123, cb);
  clock.tick(2000); /* fire any setTimeout functions that had a dely of 0 millis */
  var result = cb.args[0][1]; /* figure out the arguments when cb.spy was first called */
  var actual = Object.keys(result).sort();
  var expected = ["name", "email"].sort();

  t.plan(2);
  t.ok(cb.calledOnce, "called once");
  t.deepEqual(actual, expected);
});
