const express = require("express");
const app = express(); // configuration / storing an instance of express in our app variable
const peopleController = require("./controllers/people");

app.use(express.json()); // parse body of data into json object

app.get("/", (request, response) => {
    response.send("Welcome to the people app");
});

// our routes are set up to listen to requests to their specific URL/path
app.use("/people", peopleController);

// catch all for every request that did not match a route
app.use((request, response) => {
    response.status(404).send("The request you submitted could not be found");
});

module.exports = app;
