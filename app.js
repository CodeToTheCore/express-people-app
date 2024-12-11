const express = require("express");
const app = express() // configuration / storing n instiance of express in our app varible
const peopleController = require("./controllers/people")

app.use(express.json()); // parse body of data into json object

//any function with access to the request and response object if called middleware
app.get("/", (request, response)=>{
    // console.log(request)
    response.send("Welcome to the people app")
})

app.use("/people", peopleController)

// our routes are setup to listen to requests to their specific URL/ path

app.get("*", (request, response)=>{
    response.status(404).send("The request you submitted could not be found")
}) // catch all for all  request that did notMatch




app.get("/people", (request, response)=>{
    // console.log(request)
    Response.send("express people app")
})