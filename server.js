const path = require('path')
const xps = require("./xps.js")
const app = xps.app();

xps.go(app,
  {
    staticView: "views" ,
    bodyParse: true,//{json, raw, url, text} - Pass an object to set the exact parse methods you'd want to use.
    port: 3000
    // Can add some other common Middleware.
  }
)

  app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname, 'views/index.html'))
  })
  app.get('/contact', (req,res)=>{
    res.sendFile(path.join(__dirname, 'views/contact.html'))
  })
