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
