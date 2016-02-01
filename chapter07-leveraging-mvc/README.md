# Chapter 7: Leveraging the Model-View-Controller

## 001-hello-backbone
Illustrates how to set up a JavaScript application that uses Backbone. The `Gruntfile.js` includes *Browserify*, *jquery* and *Backbone* and also the *brfs* development dependency to transform the *Node.js* file systems for the browser.
Then, the application simply renders a static view by creating a `div` with a particular class that is referenced by JavaScript code.

## 002-hello-backbone-templates
Illustrates how to correctly use *Backbone* view templates using *Mustache* JavaScript library. In the example, we have an application that displays some content in the screen through the use of templates. It is demonstrated how to inject particular properties from the *ViewModel* into the template and how to iterate through a simple array of strings.

Note that the `Gruntfile.js` has been adapted to the new structure that uses Mustache templates, views, etc.

## 003-hello-backbone-models
Illustrates how to work with *Backbone models* which represent business domain data and logic (typically from the backend). In the example, we define a view with an input text field and several output fields. Each time the input field text changes (loses its focus), the output information will get updated.

**Note** the data will not be updated on key events, only when the whole `input` receives a `change` event, which requires for example, losing focus.  

## 004-hello-backbone-collections
Illustrates how to work with *Backbone collections* to organize models. In the example, we define a *collection* with several entries and a message is displayed in the console each time a new item is added to the collection.

## 005-hello-backbone-routing
Illustrates how to use *Backbone Routers*. In the example, a list view is displayed, and when the user clicks on the item on the screen a new view is displayed using routing.

## 006-shopping-list-v1
Illustrates how to build a simple but complete *SPA* using Backbone. In this first installment, we render a static view: we create a list view `./views/list.js` and a template that uses elements from the `viewModel` defined within the view. In the view we also define an `initialize` method that will be called when the view is instantiated and we include a call to `render` in it.
The `viewModel` contains an array of items featuring a name and a quantity.

I've also added some basic styling based on Bootstrap.
