const path = require('path')
const xps = require("./xps.js")
const app = xps.app();

xps.go(app,
  {
    staticView: "public", // Also takes an array of strings for multiple view folders.
    viewEngine: "express-handlebars", // So far just, express-handlebars ... but can be extended to include support for Pug (f.k.a Jade) or other Handlebar packages. Takes String.
    bodyParse: ["json", "raw", "urlencoded", "text"], // TRUE or [ARRAY]  - Pass an object to set the exact parse methods you'd want to use.
    port: 3000, // Either an INT or STRING
    methodOverride: true, //Doesn't override HTTP Headers... because I don't know what that is.
    httpLogger: "morgan",
    favicon: true, // Will look inside the public directory
  }
)

let routes = require(path.join(__dirname, "controller/routes.js"))
app.use(routes)

// Can add some other common Middleware.
// -------------------------------------
// -Cookie-Session
// -Cookie-Parser
// -Session
// - etc
// -------------------------------------
// Open to further Development
