![XPS Logo](https://i.imgur.com/SYQgH6d.png)

A module for streamlining [Express](http://www.expressjs.com) development.

## Getting started
With the `xps.js` file, getting your server runing is as easy as:

```
const xps = require("./xps.js");
const app = xps.app();

xps.go(app, { bodyParse: true, port: 3000 });

```
