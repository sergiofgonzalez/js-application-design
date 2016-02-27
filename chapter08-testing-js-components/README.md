# Chapter 8: Testing JavaScript components

## 001-hello-unit-test
Illustrates the most basic unit test for Node.js modules. In the example, we have a functionality in `src/compute.js` that we have to test. In order to do that, we just create a *unit test program* in `test/compute.js` in which we just require the `tape` module and our `compute` module and write the test:
```javascript
test("compute() should multiply by 555", function (t) {
  t.equal(1665, compute(3));
  t.end();
});
```
The test is run with `node test/compute.js`.

## 002-unit-test-browser-runner
Illustrates how to run the same test but within the browser (without explicityly typing `node test.js`). In order to that, it is used a build runner in HTML with also requires to have run *browserify*.
So, to run the test:
+ run `grunt build-test`
+ open `test/runner.html` in the browser

## 003-arrange-act-assert
Illustrates how to test with *tape* the custom event emitter from *Chapter 6 &mdash; 015-custom-event-emitters-sync*. That module implemented a custom event emitter that fired the execution of registered event handlers synchronously when the event occurs. The module `emitter.js` receives an object and appends a couple of methods to the object received:
+ `.on` &mdash; allows the registration of event handlers for a given event type
+ `.emit` &mdash; allows the generation of an event, and triggers the execution of the registered handlers

In the `test/` directory we create a bunch of test to verify the module's functionality using the *AAA* approach: Arrange, Act and Assert.

## 004-hello-sinon
Illustrates how to use *sinon.js* to spy on functions. In the example, we have a module that accepts a callback that we want to test. The module provides two methods that invoke the callback synchronously and asynchronously. By using *sinon.js* we don't have to create the callback and can make assertions to ensure that the callback is properly called.

## 005-hello-proxyquire
Illustrates how to use *proxyquire* to proxy require dependencies in your modules, so that you can concentrate in the actual functionality. In the example, we have a module that performs a mapping of the results found in a database. That database retrieval is performed in an external module we are not interested in.
Therefore, we use *proxyquire* to create a proxy for that module and test the one we're interested in.

## 006-hello-mocking-xmlhttprequests
Illustrates how to mock `XMLHttpRequest` invocations using Sinon. In the example, we have a simple web app that displays in the console the result of calling `https://api.github.com/zen`. In the tests, instead of accessing the API we mock it and perform the necessary assertions.
Note that the example uses *superagent* to perform HTTP requests.
To run the tests, you have to use the HTML test runner found in `test/runner.html`.

## 007-hello-dom-testing
