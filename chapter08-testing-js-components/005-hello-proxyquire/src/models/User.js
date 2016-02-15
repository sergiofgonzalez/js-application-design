"use strict";

var users = {
  111: {
    id: 111,
    name: "John Doe",
    email: "john.doe@company.com"
  }
};

module.exports = {
    findOne: function (query, done) {
      /* simulates accessing the db to retrieve a user by id */
      setTimeout(function () {
        done(null, users[query.id]);
      }, 2000);
    }
};
