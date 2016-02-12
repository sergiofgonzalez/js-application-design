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
