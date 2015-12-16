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
