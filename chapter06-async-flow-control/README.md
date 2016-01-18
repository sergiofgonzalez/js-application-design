Chapter 6: Understanding asynchronous flow control methods in JavaScript
========================================================================

## 001-hello-xmlhttprequest-sync
Illustrates the use of `XMLHttpRequest` function in a synchronous way to retrieve a long document and demonstrate that, as JavaScript is single-threaded, the program is suspended while the browser and the server communicates so the page become unresponsive.

## 002-angular-xmlhttprequest-sync
The same example as [001-hello-xmlhttprequest-sync](001-hello-xmlhttprequest-sync) but based on AngularJS for HTML templating.

## 003-hello-xmlhttprequest-async
Illustrates the use of `XMLHttpRequest` function in an async way, so that the page does not become unresponsive.

## 004-xmlhttprequest-async-improved
Illustrates how difficult it is to handle async execution. In the example, a helper function is defined to wrap `XMLHttpRequest` calls. The function accepts the URL and a callback function that is called with the response.
The function works pretty well when there are not errors, but when an error is found, it is not easy to convey the error to the caller, even when try-catch and raising exceptions are included.

## 005-xmlhttprequest-async-promises
Illustrates how to wrap `XMLHttpRequest` call in a helper function implemented with `Promise`s. The mechanism is as follows:
+ In the wrapper, we call the `Promise` constructor, giving it a function that initializes the async action. The Promise constructor will call that function passing it two arguments which are themselves functions. The first one should be called when the action finishes successfully, and the second when it fails:
```javascript
  function wrapper(param1, param2) {
    return new Promise(function(success, fail) {
      // initialization tasks
    });
  }
```
+ In the client code, you call the wrapper function passing the required params. The invocation will return a Promise. That promise acts as a handle to the request's outcome. The `Promise` provides a then method that you can call with two functions: one to handle the success case, and another one to handle the failure:
```javascript
  wrapper(param1Value, param2Value)
    .then(function(valWhenSuccess) {
      // success handling
    }, function(valWhenError) {
      // failure handling
    });
```
## 006-xmlhttprequest-async-promises-improved
Illustrates how it is not necessary to provide a failure handler and you can use the `catch` method instead, which is more readable.
```javascript
  wrapper(param1Value, param2Value)
    .then(function(valWhenSuccess) {
      // success handling
    })
    .catch(function(valWhenError) {
      // failure handling
    });
```
## 007-xmlhttprequest-async-promises-chaining
A simple illustration of how promises can be chained. In the example, an XMLHttpRequest is wrapped in a `Promise` and `then` is used to parse the response as a JSON object and then if it succeeds display it on the screen.

## 008-hello-async
Illustrates the usage of the `async` library.
+ parallel: In the example, three independent tasks are scheduled for execution. An error generation function is used to randomly generate a fabricated error, so that not all executions finish correctly.
+ series: In the example, three correlative tasks are executed asynchronously and communicate through global variables. The first task fill an array with some numbers, the second one displays them on the console and the third one computes the minimum. If the min number is an even number, an error is reported.
+ waterfall: In the example, three correlative tasks tightly coupled are called in sequence and arguments are passed from one to the other.

## 009-hello-promises
Illustrates the simplest usage of Promises with a sync (`app.js`) and async (`app2.js`) examples. In the first one, a promise is created to be fulfilled when a random number between 0 and 9 is even amd rejected otherwise, and several callbacks are registered for success and failure.
In `app2.js` the same example is repeated but the execution is performed asynchronously through `setTimeout`, demonstrating that promises are useful for both synchronous and asynchronous use cases.

## 010-promises-transformation-chain
Illustrates how to chain transformation callbacks with Promises. In the example, a simple Promise that always succeeds is constructed to return the string representation of a JSON object. Then, a first callback is registered to parse this string and return the JSON object it represents. Then a second callback is chained to receive that object and print some values from it.

## 011-chaining-promises
Illustrates how to chain Promises. In the example, we have a simple web page with 3 buttons:
+ The first one (`sync-request.js`) uses `XMLHttpRequest` to implement a single async call to the GitHub API to retrieve a page of users.
+ The second one (`async-request-ugly.js`) demonstrates how to chain Promises, but in an ugly way. In this case, we are creating another Promise in a callback.
+ The third one (`async-request-pretty.js`) demonstrates the proper way to chain Promises. In the example, async and sync callbacks are mixed, and we see that it is not necessary to wrap responses in Promises when not needing asynchronicity.

The example uses a custom `get` function that executes HTTP requests. Internally, this function simply wraps an async call to `XMLHttpRequest` in a `Promise`.

## 012-promises-parallel-flow
Illustrates how to leverage `Promise.all` to implement parallel async calls with Promises. In the example, we define a function that return a Promise that is fulfilled after a given amount of milliseconds. This function is called in parallel with three different values for that amount and you can see that they are submitted to execution in parallel and that subsequent tasks wait until all the parallel tasks have been completed.

## e01-http-backend
Simple HTTP backend for the examples in this chapter. See the README.md of the project for details on the endpoints.
