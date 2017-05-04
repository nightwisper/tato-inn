/*
	index.js

	This script stores all of the server side logic for our application, from setup to front end integrations.

	Author: Lucas Silva on May 4th. 2017
*/


//========== Init Dependencies ==========//
const express = require("express");
const port = process.env.PORT || 10000;
const path = require("path");
const session = require("express-session");
const bodyParser = require("body-parser");
const server = require("http").createServer(app);
var io = require("socket.io")(server);

var app = express();

// resolving paths
var pF = path.resolve(__dirname, "public");
var src = path.resolve(__dirname, "bundle");
var dbURL = process.env.DATABASE_URL || ""; // add database url

app.use("/bundle", express.static(src));

app.use(bodyParser.urlencoded({extende:true}));

app.use(session({
    secret:"supersecret",
    resave:"true",
    saveUnitInitialized: true
}));

server.listen(port, function(err){
    if(err){
        console.log(err);
        return false;
    }
    console.log("Application running on port "+port);
});