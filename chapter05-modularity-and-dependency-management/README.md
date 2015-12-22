Chapter 5: Embracing modularity and dependency management
=========================================================

## 001-slugging-v1
Illustrates the *SRP* (Single Responsibility Principle). The application takes a string and returns a hyphenated representation as in:
```
Some Piece of Text => some-piece-of-text
```

The application uses the following process:
1. Transform all non-alphanumeric character sequences into single dashes
2. Removes leading and trailing dashes
3. Lowercases the string

*Hint:*
The first thing to do is to define a _regexp_ for the separator and use the `String.replace` method to replace all the separators by dashes (`-`).

## 002-slugging-v2
Based on [001-slugging-v1](## 001-slugging-v1), add a feature that for an article object:
```javascript
var article = {
  title: "A cautionary tale",
  date: new Date('2015, 12, 16, 19, 13, 35')
}
```
returns the url for the article in the form:
```
/{{article.date in millis since Jan 1, 1970}}/{{title slug}}
```

The implementation must follow the *SRP* (that is, the responsibility for computing the date part or the final URL should not be assigned to the `getSlug` function).

## 003-slugging-v3
Based on [002-slugging-v2](## 002-slugging-v2), add a feature that removes irrelevant words from the slug, so that the SEO works better. The list of words to remove are: {some, the, by, for, of}.

To conform with the *SRP* principle, this functionality should not be part of `getSlug`.

## 004-average-v1
Write a JavaScript object that is used to track the average. The object must expose a method `add` to make the object consider an additional number and a method `calc` that returns the average so far.

Use the *Information Hiding Principle* so that the object presents a clear interface to the client, and that no internal details transpire.

## 005-average-v2
As the solution from [004-average-v1](## 004-average-v1) based on objects can be hacked, write a function that accepts a sequence of numbers and compute the average.

This example is much cleaner as it uses a pure function without side effects to calculate the average. Besides, code was added to handle both arguments received as arrays `average([1, 2, 3])` or as a sequence of numbers `average(1, 2, 3)`.

## 006-average-v3
Repeat the exercise, this time using a _functional factory_, that is, a function that returns a function.

## 007-understanding-this
Several examples that serve as a remainder of `apply`, `call` and `bind` with objects.

## 008-understanding-hoisting-v1
An example illustrating hoisting. In the example, a variable is defined, then a function is called, and after that the function is defined. Inside the function, the type of the variable and the value is printed on the screen.

## 009-understanding-hoisting-v2
Based on [008-understanding-hoisting-v1](## 008-understanding-hoisting-v1), the code is rearranged to show what hoisting does.

Now it makes sense the result from the previous program, as a global variable is defined, but not initialized, then the function is defined, which makes the function reference the current value of the variable (which is still undefined), then the variable is assigned a value and at last the function is called. Because the way scoping works in JavaScript, the function still maintains a reference to the variable when it was undefined.

Clearly, the only solution for this is making the effort of hoisting the variables ourselves, so that we see that type of behavior while writing the code.

## 010-hello-iife
Illustrates how to use an _IIFE_ (Immediately Invoked Function Expression) to create a scope and from that export only the public API of a given module.

## 011-augmenting-through-iife
An illustration of how to use an _IIFE_ to augment a global object, instead of creating an api from scratch.

## 012-hello-prototypes
A reminder of the features of JavaScript prototypes properties including:
+ creating objects from other objects using `Object.create`
+ Using `constructors` and `.prototype` to create objects and define its methods
+ Defining inline getters and setters in objects
+ Using `Object.defineProperty` to add setters and getters to objects

## 013-hello-prototypal-modularity
An introduction to prototypal modularity. By using this approach you can define private data inside a closure, and export the public API via a constructor and prototype functions.

In the example, you can also see how to call the constructor defined within the closure:
```javascript
var api = (function(){
  function Lib() {}
})();

var myObj = new api();
```

## 014-prototypal-modularity-v1
The first step of a more compelling prototypal modularity example. The exercise has been divided in several steps to help its understanding.

A more advanced example of prototypal modularity that shows the following areas at work:
+ augmenting the browser's global window, by adding an api exported from our custom _IIFE_
+ keeping private data hidden from the client
+ defining getters and setters using `Object.defineProperty`
+ keeping private functions hidden from the client

The application does the following:
Write a browser module that exposes a property `id` (that identifies each of the instances of the library), and another property `version` that prints the version of the library. Both properties will be read-only (i.e. only getters will be available).

## 015-prototypal-modularity-v2
This example enhances [014-prototypal-modularity-v1](014-prototypal-modularity-v1) by adding several features to the Library. The final goal is to define a method in the prototype that will be executed after a given number of milliseconds. The prototype must also control the status of each of the instances:
+ `idle`: is not doing anything
+ `waiting`: the method is scheduled for execution

The other two states: `executing` and `done` will be implemented in v3

To do that you have to:
+ Include some _static_ data to the library that will keep track the status of each of the instances of the library.
+ Include a read/write accessible property named delay
+ Include a function in the prototype named `getState` that will return the status of a given instance
+ Expose a function in the prototype named `waitForNoReason` that receives the method that will be executed after the specified timeout.

Then in the program, you will invoke that `waitForNoReason` passing an action, and you will see that it is executed after the specified time.

## 016-prototypal-modularity-v3
This example is the final step in the _prototypal modularity_ series. It enhances what we did on [015-prototypal-modularity-v2](015-prototypal-modularity-v2) by implementing status tracking for the `executing` and `done` states.

This is done by:
+ wrapping the calling of the given action in a private function defined within `waitForNoReason`. The purpose is include code before actually calling the action.
+ providing the client a public `done` method that can be used within the custom action to notify that the action is completed.

## 017-hello-commonjs
Illustrates how CommonJS works. In the example, the simplest of modules is created: it only exports a string. That module is then used by the main module `app.js` and the exported string is printed on the screen.

## 018-nodejs-commonjs
Illustrates some particularities of Node.js and the CommonJS modules such as:
+ Definition of global variables
+ Exposing a module's public interface
+ Accessing Node.js variables such as `__dirname`

## 019-hello-requirejs
Illustrates how to work with *Require.js* to handle internal dependencies. In the example, we have a web app which uses *Require.js* to load a main module `app.js`. That module declares a dependency with another one `lib.js`, which exposes a simple function that transform a string to its uppercase representation.

## 020-hello-browserify
Illustrates how to use `grunt-browserify` to leverage CommonJS modules in the browser. In the example, the JavaScript referenced by the HTML page uses `require` to reference a custom module that exports a function. 
