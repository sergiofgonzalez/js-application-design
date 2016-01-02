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

## e01-http-backend
Simple HTTP backend for the examples in this chapter. See the README.md of the project for details on the endpoints.
