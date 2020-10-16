var express = require('express');
var bodyParser = require('body-parser');
var app = express();

//  app.use("/", (req, res, next)=>{
//   console.log(`${req.method} ${req.path} - ${req.ip}`);
//   next();
// })

// app.use(express.static(`${__dirname}/public`));
// app.use(bodyParser.urlencoded({ extended: false }));

// -------------------------

// Working Express Server

// app.get("/",function(req, res){
//   res.send("Hello Express");
// })

// -------------------------

// Serve an HTML file

// app.get("/", (req, res)=>{
//   res.sendFile(`${__dirname}/views/index.html`)
// })

// -------------------------

// Use the .env file to configure the app

// app.get('/json', (req, res)=>{
//   const message = process.env.MESSAGE_STYLE == "uppercase"?"Hello json".toUpperCase(): "Hello json"
//   res.json({'message':message})
// })

// -------------------------

// Chaining middleware

// app.get('/now', (req, res, next)=>{
//   req.time = new Date().toString();
//   next();
// }, (req, res, next)=>{
//   res.send({time: req.time});
// })

// -------------------------

// Get input from client - Route parameters

// app.get("/:word/echo", (req, res)=>{
//   res.send({echo: req.params.word});
// })

// -------------------------

// Get input from client - Query parameters
// /name?first=<firstname>&last=<lastname>

// app.get('/name', (req, res) => {
//   res.json({ name: `${req.query.first} ${req.query.last}` });
// });

// -------------------------

// Get ready for POST Requests

// app.post('/name', (req, res) => {
//   res.json({ name: `${req.body.first} ${req.body.last}` });
// });

module.exports = app;
