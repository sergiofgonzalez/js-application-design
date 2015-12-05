Chapter 4: Release, deployment and monitoring
=============================================

## 001-image-optimization
Illustrates how to work with the `grunt-contrib-imagemin` tool to optimize JPEG images.

## 002-asset-hashing
Illustrates how to use the `grunt-contrib-usemin` plugin which orchestrates calls to `grunt-contrib-concat`, `grunt-contrib-uglify`, `grunt-contrib-cssmin` and `grunt-filerev`. The first three grunt plugins are already known, and the fourth one is used to append a hash to the static assets such as CSS, JavaScript and image files to bust the browser cache when a new file is deployed.

The configuration of `grunt-contrib-usemin` is a bit obscure because it assumes that you will be using the plugins, but you don't have to create targets for them. Besides, you need to include some specific comments in your HTML files so that the plugin knows what files to change.

## 003-critical-inlining
Illustrates how to use the `grunt-critical` plugin which inlines critical CSS in your HTML page to optimize rendering your page. As you can imagine, this should be done when all other optimizations have already been done.
