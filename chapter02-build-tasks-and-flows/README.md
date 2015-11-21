Chapter 2: Composing build tasks and flows
==========================================

## 001-empty-grunt-configuration
Illustrates how to set up the bare minimum Grunt configuration that includes a `package.json` with a reference to the grunt engine and an `Gruntfile.js` which contains the registration of an empty `default` task.

## 002-setting-up-jshint-task
Configures `jshint` task using the `grunt-contrib-jshint` plugin. The Gruntfile is given a configuration object for `jshint` target, which in turn will lint the `Gruntfile.js` itself, and the default task of Grunt is set to `jshint`.

## 003-hello-node-modules
Illustrates the simplest example of custom Node.js module system CommonJS, which resorts to `module.exports` and `require`.
