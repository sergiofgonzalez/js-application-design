Chapter 4: Release, deployment and monitoring
=============================================

## 001-image-optimization
Illustrates how to work with the `grunt-contrib-imagemin` tool to optimize JPEG images.

## 002-asset-hashing
Illustrates how to use the `grunt-contrib-usemin` plugin which orchestrates calls to `grunt-contrib-concat`, `grunt-contrib-uglify`, `grunt-contrib-cssmin` and `grunt-filerev`. The first three grunt plugins are already known, and the fourth one is used to append a hash to the static assets such as CSS, JavaScript and image files to bust the browser cache when a new file is deployed.

The configuration of `grunt-contrib-usemin` is a bit obscure because it assumes that you will be using the plugins, but you don't have to create targets for them. Besides, you need to include some specific comments in your HTML files so that the plugin knows what files to change.

## 003-critical-inlining
Illustrates how to use the `grunt-critical` plugin which inlines critical CSS in your HTML page to optimize rendering your page. As you can imagine, this should be done when all other optimizations have already been done.

## 004-version-bump
Illustrates how to use the `grunt-bump` plugin you can use to automatically update the version number in your `package.json` and optionally, perform a commit and tag that commit (those latter options have been disabled in this example).

## 005-hello-heroku-node
Submodule pointing to https://github.com/sergiofgonzalez/hello-heroku-node.git that illustrates the simplest of applications that you can deploy in Heroku PaaS.

## 006-hello-heroku-grunt
Submodule pointing to https://github.com/sergiofgonzalez/hello-heroku-grunt.git that illustrates how you can run _Grunt_ tasks as part of the deployment to Heroku.

The procedure is based in creating the application using:
```
$ heroku create hello-heroku-grunt-app \
--buildpack https://github.com/mbuchetics/heroku-buildpack-nodejs-grunt.git
```

And configuring a `heroku` task in your `Gruntfile.js` instructing what to do on deployment time.

## 007-heroku-grunt-advanced
Submodule pointing to https://github.com/sergiofgonzalez/heroku-grunt-connect.git that illustrates a more comprehensive example of how to integrate _Grunt_ tasks in Heroku.

## e01-complete-example
Submodule pointing to https://github.com/sergiofgonzalez/imdb-cast-fixer.git that illustrates a complete example of the most interesting topics until now:
+ Grunt tasks for debug and release
+ Continuous Development: watching and serving files using `grunt-contrib-connect`
+ Concatenation, uglifying and asset hashing for release
+ Deployment to Heroku PaaS
+ A more comprehensive Node.js HTTP server used for release build, using `log4js` logger.
