Chapter 2: Composing build tasks and flows
==========================================

## 001-empty-grunt-configuration
Illustrates how to set up the bare minimum Grunt configuration that includes a `package.json` with a reference to the grunt engine and an `Gruntfile.js` which contains the registration of an empty `default` task.

## 002-setting-up-jshint-task
Configures `jshint` task using the `grunt-contrib-jshint` plugin. The Gruntfile is given a configuration object for `jshint` target, which in turn will lint the `Gruntfile.js` itself, and the default task of Grunt is set to `jshint`.

## 003-hello-node-modules
Illustrates the simplest example of custom Node.js module system CommonJS, which resorts to `module.exports` and `require`.

## 004-hello-node-tips
The directory in which the tips found in `10 Habits of a Happy Node Hacker (2016)` are put into action.
1. Use `npm init --yes` to scaffold a valid `package.json`.
2. Edit `package.json` and include the following key:
```
"engines": {
  "node": "4.2.2" // or the version reported by node --version
}
```
3. Configure npm to always save dependencies on the `package.json` manifest file:
```
$ npm config set save=true
$ npm config set save-exact=true
```
By doing so, `npm install` will always default to `npm install --save --save-exact`.
The second option will prevent the leading carat `^` to be included in the dependencies and will therefore produce a more stable build.
**NOTE**
Those options are stored in the file `~/.npmrc`.

## 005-custom-grunt-task
Illustrates how to create a custom task *inline* in a Grunt file. The task is very simple: it creates a file with the current timestamp in the desired location.
The default timestamp file is `.timestamp`. But the timestamp  file can be customized using:
```
timestamp: {
  options: {
    file: 'path/to/your/timestamp.file'
  }
}
```
The example also illustrates how to merge the user configured options with the default options:
```
var options = this.options({
  file: '.timestamp'
});
```

**Note** When you cat the timestamp file you will see a human readable timestamp, but if you edit the file you will see a Unix-type timestamp.

## 006-custom-grunt-task-adv
Based on the previous example, explores additional options related to Grunt:
+ Configures the clean task using templates, so that it can read the `timestamp.options.file` configuration option.
+ Uses `grunt.config.requires` in the `timestamp` task implementation to make the task require the `timestamp.options.file` configuration option. Otherwise it will fail.
