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
