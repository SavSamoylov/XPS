const path = require('path')
const xps = require("./xps.js")
const app = xps.app();

xps.go(app,
  {
    staticView: "views", // Also takes an array of strings for multiple view folders.
    bodyParse: ["json", "raw", "urlencoded", "text"], // TRUE or [ARRAY]  - Pass an object to set the exact parse methods you'd want to use.
    port: 3000 // Either an INT or STRING

    // Can add some other common Middleware.
    /**
    -Cookie-Session
    -Cookie-Parser
    -Session
    -Serve-Favicon
    // Open to further Development

    **/
  }
)

  app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname, 'views/index.html'))
  })
  app.get('/contact', (req,res)=>{
    res.sendFile(path.join(__dirname, 'views/contact.html'))
  })
