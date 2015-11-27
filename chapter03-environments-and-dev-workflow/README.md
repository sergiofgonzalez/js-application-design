Chapter 3: Mastering Environments and the development workflow
==============================================================

## 001-jshint-task-with-targets
Illustrates how to setup the `jshint` task with several targets. Additionally, the task is configured to use different `.jshintrc` for the Grunt files and the application JavaScript.

## 002-grunt-task-aliases
Illustrates how to create task aliases in Grunt such as `build:release` or `build:debug` that will trigger differentiated workflows for release and debug distributions, although `build` is not defined as an actual Grunt task.

## 003-secure-config-tasks
Illustrates how to leverage an existing Grunt plugin `grunt-pemcrypt` to securely handle environment level configuration files.

**NOTE**
The versions of the `grunt-pemcrypt` dependencies were very old, so i had to clone the `grunt-pemcrypt` repo and one of its dependencies `node-pemcrypt`, create branches and update the versions of their corresponding `package.json` files. The modifications have been performed on a separate branch `custom_branch`, and the `003-secure-config-tasks` dependency to `grunt-pemcrypt` has been made local.

### Rationale
Keeping environment-level configuration files in version control is a security risks. Typically, you will find sensitive information such things as database passwords and API keys, mixed with the port on which the application is listening. If you commit this information to SCM, you will be making this information available.

By using the following workflow, you will be able to securely store the configuration files as encrypted information.

### Workflow
0. Configure your .gitignore to ignore the files inside the `private` directory. This file will contain the keys and the clear text configuration files.

1. Generate RSA keys that will be used to encrypt and decrypt the configuration files. It is recommended to use one key per environment, so that you can distribute the keys to the appropriate teams (dev team shouldn't have staging keys).
The following configuration will generate the keys `dev.pem` and `staging.pem` into the `private` directory.
```javascript
"pem_gen": {
  dev: { pem: pemkey("dev") },          // generates private/dev.pem
  staging: { pem: pemkey("staging") }   // generates private/staging.pem
},
```
2. Create the key for the development environment by typing `grunt pem_encrypt:dev`.

3. Place the clear-text configuration files in the `private`. Let's assume that those files are called `dev-config.json` and `staging-config.json`.

4. Configure the encryption task:
```javascript
"pem_encrypt": {
  dev: { pem: pemkey("dev"), pemstore: "secure/dev-config-encrypted", rawstore: "private/dev-config" },
  staging: { pem: pemkey("staging"), pemstore: "secure/staging-config-encrypted", rawstore: "private/staging-config" }
},
```

This configuration tells `grunt-pemcrypt` to encrypt the `private/dev-config.json` using the `dev.pem` key and store the encrypted file into `secure/dev-config-encrypted`.

5. Create the encrypted version of the configuration files for the development environment by typing `grunt pem_encrypt:dev`. You will notice that a file named `dev-config-encrypted.pemjson` is created in the `secure` directory.
This file can be *safely* committed to the SCM, as the key will not be distributed.

6. Configure the decryption task as follows:
```javascript
"pem_decrypt": {
  dev: { pem: pemkey("dev"), pemstore: "secure/dev-config-encrypted", rawstore: "private/dev-config-clear" },
  staging: { pem: pemkey("staging"), pemstore: "secure/staging-config-encrypted", rawstore: "private/staging-config-clear" }
}
```
This configuration piece tells `grunt-pemcrypt` to perform the decryption of the `secure/dev-config-encrypted` using `dev.pem` and place the result in `private/dev-config-clear`.

6. Whenever your development team needs to set up an environment, distribute the `dev.pem` key. With the key in place the development team just needs to run `grunt pem_decrypt:dev`.

This way you'll have a way of rebuilding a clear text version of your environment-level configuration file from your SCM system.

**Note**
I have included an `example` directory with some sample keys and configuration files.

## 004-merge-config-task
Illustrates how to use the `nconf` npm plugin to merge configuration values with different precedence, so you have multiple options available to configure your application without actually having to rebuild the app.

In the example, there is an `app.js` that uses a custom module `cfg/index.js` to read the configuration and return the results to app.js which just prints them in the console.
The configuration values for the applications are:
+ `NODE_ENV`
+ `PORT`

The lowest precedence is taken from a file in the working directory called `development.json` which contains the default values for the application.
Then, you can override these default values with OS environment variables.
And the top precedence is for parameters passed to your applications.

The following table explains how it works:
Command                                      |`PORT`  |`NODE_ENV`
---------------------------------------------|--------|--------------
`node app`                                   | `3000` | `development`
`PORT=80 node app`                           | `80`   | `development`
`NODE_ENV=staging node app`                  | `3000` | `staging`
`PORT=80 NODE_ENV=staging node app`          | `80`   | `staging`
`node app --PORT 8080`                       | `8080` | `development`
`node app --NODE_ENV local node app`         | `3000` | `local`
`node app --PORT 8080 NODE_ENV local`        | `8080` | `local`
`NODE_ENV=staging node app --NODE_ENV local` | `3000` | `local`

## 005-watch-tasks-simple
Illustrates how to work with the `watch` task that lets you trigger tasks when a watched file is changed.

In the example, we have a very simple Node.js application that is being developed in the `public` directory. The Gruntfile contains configuration tasks for linting, cleaning directories, copying from the development folder to the build directory but also defines the following tasks using `grunt.registerTask` that orchestrate the simple tasks into something more useful:
+ `build:debug` : cleans the `build` directory (meant to contain the debug build files), runs jshint on the application and grunt files, and then creates a debug build of the application by copying the app to `public`.
+ `dev` : runs the `build:debug` tasks, and then watch for changes on files on the `public` directory. When a change in one of this files is detected, the `watch` task is configured to run the `build:debug` task automatically.

## 006-watch-tasks-advanced
A more elaborate example of `watch` tasks, that focuses on specifying different watch tasks for the different types of artifacts (js files, html files, configuration, etc.).

If you don't understand the details for this example, please review [005-watch-tasks-simple](## 005-watch-tasks-simple).

In this example it is also used an explicit configuration of JSHint that uses different files for the different types of JavaScript files found in the repository.

## 007-nodemon-no-grunt
Illustrates how to use `nodemon` plugin to watch and reload a server side app based on Node.js.
In the example, we create the most basic HTTP server in `app.js` which returns an HTML page for `/` and an error page for whatever other path. The views returned have links for JavaScript files, but those are not well handled by `app.js` so don't expect them to work.

When you use `nodemon app.js` the application will be started (as if using `node app.js`), but will also check for changes in app.js and restart the application as necessary. The `.nodemonignore` has been configured to ignore some directories and the `Gruntfile.js` so that the application is not restarted if one of those files are changed.

The directory also contains a very basic frontend application on the public directory, and the Grunt tasks are configured similarly to [006-watch-tasks-advanced](## 006-watch-tasks-advanced).

**NOTE**
The following example configures `nodemon` as a Grunt task, but the recommended way to do it is the one explained in this example: running `grunt dev` on one terminal tab and running `nodemon app.js` on another tab, because it's faster.
