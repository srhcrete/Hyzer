# _Sass with npm_

#### Project setup to watch and compile sass with npm. More detailed steps for this project can be found in this [article](https://medium.com/@brianhan/watch-compile-your-sass-with-npm-9ba2b878415b) by Brian Han.

## Pre-requisites

_Node.js._

## Getting Started

* _Open terminal and create a new project folder._
* _Create a package.json file and follow the prompts._
* _Set up the folders.`mkdir bin public scss && mkdir public/css`_
    * _**scss** contains scss files and directories._
    * _**public** contains css files and directories_
    * _**bin** contains command line script to compile scss files._
* _Now set up the files. `touch scss/main.scss .gitignore`_
    * _**main.scss** where we write the scss code._
    * _Add **node_modules** to the **.gitignore**._

## Install dev-dependencies

* _`npm install -D node-sass nodemon`_
    * _-D flag writes the node-modules into the package.json._
    * _**node-sass** wraps Libsass. Gulp-sass uses this package to compile scss to css files._
    * _**nodemon** watches for changes on our scss files._   

## Compile the Sass

* _In your package.json, find the "scripts" object and write the following code inside:_
    * _`“scripts”: {
  “build-css”: “node-sass --include-path scss scss/main.scss   public/css/main.css”
},`._
* _Then run `npm run build-css` in the terminal._

## Watch the Sass

* _In your package.json, find the "scripts" object and write the following code inside:_
    * _`“scripts”: {
 “build-css”: “node-sass --include-path scss scss/main.scss public/css/main.css”,
 “watch-css”: “nodemon -e scss -x \”npm run build-css\””
},`._
* _Then run `npm run watch-css` in the terminal._

## Refactor: Move scripts into their own files

* _Run `touch bin/build-css bin/watch-css` in the terminal._
    * _Take the build-css script and put it in the build-css file._
    * _Take the watch-css script and put it in the watch-css file._
* _Run `chmod +x bin/build-css chmod +x bin/watch-css` in the terminal._
* _Change the scripts reference in the package.json file to
      `“scripts”: {
      “build-css”: “./bin/build-css”,
      “watch-css”: “./bin/watch-css”
      },`_
* _Then run `npm run watch-css` again._      


## Support and contact details

_If you have any comments or suggestions please make a contribution to my repository_

### License

*This project is licensed under the MIT license*

Copyright (c) 2017 **_Sarah Lindmar_**
