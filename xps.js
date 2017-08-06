const express = require('express')
const bodyParser = require('body-parser')

let XPS = function(){

  this.app =  function(){return express();}

  this.go = function(app, obj){


    if(obj.staticView){
      let directory = obj.staticView;
      console.log(directory)
      app.use(express.static(directory));
    }


    if(obj.bodyParse){

        let bp = obj.bodyParse;
        console.log(bp)

        if(bp === true){
          // parse various different custom JSON types as JSON
          app.use(bodyParser.json({ type: 'application/*+json' }))

          // parse application/x-www-form-urlencoded
          app.use(bodyParser.urlencoded({ extended: false }))

          // parse some custom thing into a Buffer
          app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))

          // parse an HTML body into a string
          app.use(bodyParser.text({ type: 'text/html' }))
        }

    }

    if(obj.port) {

        let PORT = process.env.PORT || obj.port;
        console.log(PORT);
        app.listen(PORT, ()=>{
          console.log("Server started on PORT: %s", PORT)
        })
      }
    }

}

let xps = new XPS();

module.exports = xps;
