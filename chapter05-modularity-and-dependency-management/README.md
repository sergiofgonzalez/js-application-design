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
