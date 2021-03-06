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

## 007-grunt-db-tasks
Defines a set of custom Grunt tasks that perform database operations on a MySQL instance.

### Tasks configuration
There is a file `db.json` on the project's root folder that is used to configure the database connection information and scripts:
```json
{
  "credentials": {
    "host": "localhost",            
    "user": "root",
    "password": "the-password"
  },
  "db": "buildfirst",
  "scripts": "scripts"
}
```
The scripts are configured according to the following naming strategy:
+ `*.*.up.sql`   : scripts to upgrade the database
+ `*.*.down.sql` : scripts to downgrade the database
+ `*.*.seed.sql` : scripts to populate the database

The `up.sql` and `down.sql` must be paired, so that after running a given *up* file you can execute the paired *down* file to rollback that particular change.

The `Gruntfile.js` needs no further configuration, as it is already configured to read the `db.json` options.
**TODO:**
This can be improved by gathering the information from a configured file name (instead of hardcoded), or directly putting the information on the Grunt configuration.

### Implementation
I've basically copied the implementation from https://github.com/buildfirst/buildfirst/tree/master/ch02/10_mysql-tasks, almost blindly.
The tasks are defined in the `tasks` directory, and the common custom modules are stored in the `lib` directory.
In order to perform to keep control of what has been already added, the run scripts are stored in a table called `__v`.

### Usage
Several tasks are defined:
+ `db-create`   : Creates the configured database if it doesn't previously exist.
+ `db-upgrade`  : Executes the `*.*.up.sql` scripts that have not been previously executed
+ `db-rollback` : Executes the `*.*.down.sql` script for the most recently *up* script.
+ `db-seed`     : Executes the `*.*.seed.sql` scripts.
+ `db-setup`    : Sequentially executes `db-create` + `db-upgrade` + `db-seed`.

## 008-spriting
Illustrates how to use spriting in a web application using a Grunt plugin `grunt-spritesmith`. In the example, several icons found under the `img/icons` are joined together in a `icons.png` image that includes all of the icons. Additionally, a CSS file is automatically created so that you can easily reference the images via CSS classes in your views.

## 009-bundling-through-concatenation
Illustrates how to use concatenation of static assets using `grunt-contrib-concat`. In the example, the JavaScript files found in `public/js` are concatenated in a `bundle.js` file. The same approach could be applied to CSS files.

## 010-asset-minification
Illustrates how to implement minification of JavaScript resources using `grunt-contrib-uglify`. In the example, each of the files found in `public/js` is minified and copied to `build/js`. The same approach could be applied to CSS files.

## 011-bundle-then-minify
Illustrates how to implement bundling and minification of JavaScript resources using [009-bundling-through-concatenation](## 009-bundling-through-concatenation) and [010-asset-minification](## 010-asset-minification) examples.

## e01-server
A simple example that uses an actual *static web server* from which the build files are served to the browser. It leverages both `grunt-contrib-connect` and `grunt-watch` to enable serving the files and **automagically** refreshing the browser with the given changes.

It is important to note how the js files are referenced from `index.html` now that the files are served instead of referenced from the local filesystem.
