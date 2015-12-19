/*
  A reminder of JavaScript prototypes
*/
"use strict";

/* using `Object.create` */
var protoRabbit = {
  speak : function(line) {
    console.log("Rabbit says", line);
  }
};

var killerRabbit = Object.create(protoRabbit);
killerRabbit.type = "killer";

killerRabbit.speak("JavaScript rocks!!!");
printSeparator();


/* using constructors */
function Rabbit(type) {
  this.type = type;
}

Rabbit.prototype.speak = function(line) {
  console.log("The " + this.type + " rabbit says: " + line);
};

var blackRabbit = new Rabbit("black");
blackRabbit.speak("Hello!!!");
printSeparator();

/* Setters and Getters */
var pile = {
  elements: ["eggshell", "orange peel", "worm"],
  get height() {
    return this.elements.length;
  },
  set height(value) {
    console.log("ERROR: the height property cannot be set: " + value + " ignored.");
  }
};

console.log(pile.height);
pile.height = 5;
printSeparator();

/* Setters and Getters through `Object.defineProperty` */

function Car(make) {
  this._make = make;
  this._year = null;
}

Object.defineProperty(Car.prototype, "year", {
  get: function() {
    return this._year;
  },
  set: function(value) {
    this._year = value;
  }
});

Object.defineProperty(Car.prototype, "make", {
  get: function() {
    return this._make;
  }
});

var vw = new Car("Volkswagen");
vw.year = 2000;
console.log(vw);
console.log(vw.make);
console.log(vw.year);

vw.year = 2005;
//vw.make = "audi"; // Cannot see property of #<Car> which has only a getter
console.log(vw);


function printSeparator() {
  console.log("===============================================");
}
