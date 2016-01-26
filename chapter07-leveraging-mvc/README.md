# Chapter 7: Leveraging the Model-View-Controller

## 001-hello-backbone
Illustrates how to set up a JavaScript application that uses Backbone. The `Gruntfile.js` includes *Browserify*, *jquery* and *Backbone* and also the *brfs* development dependency to transform the *Node.js* file systems for the browser.
Then, the application simply renders a static view by creating a `div` with a particular class that is referenced by JavaScript code.

## 002-hello-backbone-templates
Illustrates how to correctly use *Backbone* view templates using *Mustache* JavaScript library. In the example, we have an application that displays some content in the screen through the use of templates. It is demonstrated how to inject particular properties from the *ViewModel* into the template and how to iterate through a simple array of strings.

Note that the `Gruntfile.js` has been adapted to the new structure that uses Mustache templates, views, etc.
