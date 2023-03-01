// jshint esversion: 6

const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {
    res.send("Thank you");
})

app.listen(3000, function() {
    console.log("Server started on port 3000");
})