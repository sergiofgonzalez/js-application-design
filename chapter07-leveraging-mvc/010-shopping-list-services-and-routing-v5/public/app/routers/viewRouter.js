'use strict';

var Backbone = require('backbone');
var ListView = require('../views/list.js');
var AddItemView = require('../views/addItem.js');

module.exports = Backbone.Router.extend({
  routes: {
    '': 'root',
    'items': 'listItems',
    'items/add': 'addItem'
  },
  root: function () {
    this.navigate('items', { trigger: true });
  },
  listItems: function () {
    new ListView(); /* jshint ignore: line */
  },
  addItem: function () {
    new AddItemView(); /* jshint ignore: line */
  }
});
