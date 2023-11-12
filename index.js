const express = require('express');
const bodyParser = require('body-parser');

const feedRoutes = require('./routes/BuildingRoute');

const app = express();

const path = require("path");
const exp = require('constants');
const fs = require('fs')

var livereload = require("livereload");
var connectLiveReload = require("connect-livereload");

const liveReloadServer = livereload.createServer();
liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 10);
});


const db = require("./util/database")

// models

const building = require("./models/Building")
const visitor = require("./models/Visitor")

// live reload
app.use(connectLiveReload());

app.use(express.static(path.join(__dirname, 'node_modules')));
app.use(express.static(path.join(__dirname, 'custom-modules')));
// angularjs files
app.use(express.static(path.join(__dirname, 'web')))


app.use(bodyParser.json()); // application/json

app.use('/visitors-app', feedRoutes);


app.get("*",function(req, res){
   res.sendFile(path.join(__dirname + '/index.html'))
})



app.use(function (req, res, next) {
   next(createError(404));
 });


 
 // error handler
 app.use(function (err, req, res, next) {
   // set locals, only providing error in development
   res.locals.message = err.message;
   res.locals.error = req.app.get("env") === "development" ? err : {};
 
   // render the error page
   res.status(err.status || 500);
   res.render("error");

 });

 db.sync().then(res =>{
  app.listen(8080);
 // console.log(res)

 }).catch(err=>{

 // console.log(err)

 })


