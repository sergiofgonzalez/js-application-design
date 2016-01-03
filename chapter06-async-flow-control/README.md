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


## e01-http-backend
Simple HTTP backend for the examples in this chapter. See the README.md of the project for details on the endpoints.
