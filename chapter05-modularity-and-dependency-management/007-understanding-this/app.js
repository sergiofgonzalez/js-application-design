"use strict";

/* `this` is used to refer to the fields of an object */
function Article(title, creationDate) {
  this.title = title;
  this.creationDate = creationDate;
}

/*
  again, we define an addtional function on the object and use `this` to refer
  to the object fields. The field values will be bound at runtime.
*/
Article.prototype.url = function() {
  function getSlug(text) {
    var separatorRegexp = /[^a-z0-9]+/ig;
    var headingOrTrailingDashRegexp = /^-|-$/g;

    return text
            .replace(separatorRegexp, "-")
            .replace(headingOrTrailingDashRegexp, "")
            .toLowerCase();
  }

  function getStamp(date) {
    return date.getTime();
  }

  function filterText(text) {
    var keywordsRegexp = /\b(some|the|by|for|of)\b/ig;
    return text.replace(keywordsRegexp, "");
  }

  return "/" + getStamp(this.creationDate) + "/" + getSlug(filterText(this.title));
};

/* normal usage */
var article = new Article("JavaScript in action", new Date());
console.log("article:", article);
console.log("article URL:", article.url());
printSeparator();

/*
  we can use `Function.apply` to provide a specific `this` to a function .
  The syntax is a bit weird for traditional Java developers like me...
*/
var anotherArticle = new Article("Buildfirst JavaScript", new Date());
console.log("anotherArticle:", anotherArticle);
console.log("URL:", Article.prototype.url.apply(anotherArticle));


/* `Function.apply` also can be used with arguments */
function Average() {
  this.count = 0;
  this.sum = 0;
}

Average.prototype.add = function (num) {
  this.count++;
  this.sum += num;
};

Average.prototype.calc  = function () {
  return this.sum / this.count;
};

var average = new Average();
average.add(1);

/* note that arguments have to be passed in an array */
Average.prototype.add.apply(average, [5]);
console.log("average.calc():", average.calc());
printSeparator();

/*
  `this` becomes tricky in JavaScript when you deal with objects and functions
*/
function NumberHolder(value) {
  this.number = value;
}

/*
  In the function passed to forEach, `this` does not refer to the NumberHolder
  instance, so we need use a technique to pass it an instance.

  In this case we use the `bind` method to explicitly provide a this.
*/
NumberHolder.prototype.sum = function (numArray) {
  var result = [];
  numArray.forEach(function(element) {
    result.push(element + this.number);
  }.bind(this));
  return result;
};

var numberHolder = new NumberHolder(1);
var nums = [10, 11, 12, 13, 14, 15];
console.log("result:", numberHolder.sum(nums));
printSeparator();

/*
  The `call` function is exactly like apply, but receives the parameters normally,
  intead of wrapped in an array.
  It is extensively used when we want to transform
  array-like objects into real arrays...
*/
var arrayLike = { 0: "a", 1: "b", 2: "c", length: 3};
console.log("arrayLike:", arrayLike);
console.log("is arrayLike an array?:", arrayLike instanceof Array);
Array.prototype.forEach.call(arrayLike, function(elem, i) {
  console.log(i + ": " + elem);
});
printSeparator();

/*
  Some additional examples from BuildFirst repo
*/

/*
  `Function.prototype.call` and `Function.prototype.apply` are quite
  straightforward.
  They're used to call a specific method passing the object as an
  argument to the function.
*/

// `Function.prototype.call`
var numbers = [1, 2, 3];
console.log(numbers.slice(1, 2));
console.log(Array.prototype.slice.call(numbers, 1, 2));

// `Function.prototype.apply`
console.log(Array.prototype.slice.apply(numbers, [1, 2]));

/*
 `Function.prototype.bind` is used to create a special function that can be used
 to invoke the function it is originally called on, but with the twist that we
 will providing the context that should be used in the function.

 We saw an example before when we injected a `this` in a forEach argument.

 Now, we use it to specifically create the function, as well as to assign extra
 arguments creating a curried version of the original function.
 Currying is one of the most interesting aspects of functional programming, allowing
 you to pre-apply one or more arguments to a method.

*/
var pushAFour = Array.prototype.push.bind(numbers, 4);
console.log("numbers (before):", numbers);
pushAFour();
console.log("numbers (after):", numbers);

var pushAFive = Array.prototype.push.bind(numbers, 5);
pushAFive(6); // -> Same as push(5) and then push(6)
console.log("numbers (after currying):", numbers);
printSeparator();

/*
  More currying...

  note we're using `null` for the first argument as we're not using objects
  (the first argument is to pass `this`)
*/

function somethingIsSomewhere(what, where) {
  console.log("The", what, "is", where);
}

somethingIsSomewhere("tree", "on the hill");

var preAppliedFirstArg = somethingIsSomewhere.bind(null, "tree");
preAppliedFirstArg("on the hill");
preAppliedFirstArg("in the forest");

var preAppliedBothArgs = somethingIsSomewhere.bind(null, "big brown fox", "hiding behind the bushes");
preAppliedBothArgs();

function printSeparator() {
  console.log("==============================================");
}
