# _Sass with npm_

#### Project setup to watch and compile sass with npm. More detailed steps for this project can be found in this [article](https://medium.com/@brianhan/watch-compile-your-sass-with-npm-9ba2b878415b) by Brian Han.

## Pre-requisites

_Node.js._

## Getting Started

* Open terminal and create a new project folder.
* Create a package.json file and follow the prompts.
* Set up the folders.

`mkdir bin public scss && mkdir public/css`

* **scss** contains scss files and directories.
* **public** contains css files and directories.
* **bin** contains command line script to compile scss files.

* Now set up the files.

`touch scss/main.scss .gitignore`

      * **main.scss** is where we write the scss code.
      * Add **node_modules** to the **.gitignore**.

## Install dev-dependencies

`npm install -D node-sass nodemon`

* -D flag writes the node-modules into the package.json.
* **node-sass** wraps Libsass. Gulp-sass uses this package to compile scss to css files.
* **nodemon** watches for changes on our scss files.

## Compile the Sass

* In your package.json, find the "scripts" object and write the following code inside:

     `“scripts”: {
      “build-css”: “node-sass --include-path scss scss/main.scss   public/css/main.css”
      },`

* Then run `npm run build-css` in the terminal.

## Watch the Sass

* In your package.json, find the "scripts" object and write the following code inside:

    `“scripts”: {
      “build-css”: “node-sass --include-path scss scss/main.scss public/css/main.css”,
      “watch-css”: “nodemon -e scss -x \”npm run build-css\””
      },`

* Then run `npm run watch-css` in the terminal.

## Refactor: Move scripts into their own files

* Run `touch bin/build-css bin/watch-css` in the terminal.

    * Take the **build-css script** and put it in the **build-css file**.
    * Take the **watch-css script** and put it in the **watch-css file**.

* Run `chmod +x bin/build-css chmod +x bin/watch-css` in the terminal.
* Change the scripts reference in the package.json file to

      `“scripts”: {
      “build-css”: “./bin/build-css”,
      “watch-css”: “./bin/watch-css”
      },`

* Then run `npm run watch-css` again.     


## Support and contact details

_If you have any comments or suggestions please make a contribution to my repository_

### License

*This project is licensed under the MIT license*

Copyright (c) 2017 **_Sarah Lindmar_**
