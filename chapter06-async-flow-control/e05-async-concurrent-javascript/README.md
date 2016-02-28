# JavaScript concurrency model &mdash; Async concurrent JavaScript
> snippet that illustrates how JavaScript enables concurrency through async callbacks

## Description
Illustrates in two different examples, how JavaScript enables async behavior through callbacks and the runtime APIs such as `setTimeout`. In the first example.

In the first example, it is demonstrated how a `setTimeout(cb, 0)` does not guarantee that the callback will be invoked immediately &mdash; it tells the system to execute the callback as soon as the *call stack* is clear.

In the second example, we have a loop that never ends because the condition to terminate the loop is in a callback that is never picked up from the callback queue because the callback stack is never empty.
