const express = require("express")
const people = express.Router();
const peopleArr = require("../data/people")

// Index: create a route that gets all of the people data using the array
people.get("/", (request, response)=>{
    response(200).json(peopleArr)
})


// Show: create a route that gets one specific person using the array
people.get("/:id", (request, response)=>{
    try{
    console.log(request.params)
    const {id} = request.params
    const people = peopleArr.find(people => people.id === Number(id));
    if(people){
      response.status(200).json(people)
    }else{
        throw "people could not be found";
    }
    } catch (error) {
        response.status(404).json({error: error})
    }
});

// Create: create a route that creates a person and adds them to the people array
people.post("/", (request, response)=>{
    try{
        const newPerson = request.body;
        newPerson.id = peopleArr.length + 1;
         if(people.name && people.description){
            peopleArr.push(people);
            response.status(201).json(peopleArr[peopleArr.length - 1]);
         }else{
            throw "could not create people. please provide data";
         }
   } catch (error)  {
    response.status(400).json({error: error});
   }
});

// Update: create a route that replaces a person with an updated object
people.put("/:id", (request, response)=>{
    try{
        const {id} = request.params
        const people = request.body;
        const index = peopleArr.findIndex((people)=> Number(id) === people.id)
        if(index !== -1){
            peopleArr.splice(index, 1, people);
            response.status(201).json(peopleArr)
        }else {
            throw " could not update people"
        }
    }catch (error){
        Response.status(400).json({error});
    }
});


// Delete: create a route that removes a person from the array
people.delete("/:id", (request, response)=>{
    try {
        const {id} = request.params;
        const index = peopleArr.findIndex((people)=> people.id === Number(id))
        if(index !== -1){
            peopleArr.splice(index, 1);
            response.status(200).json(peopleArr);
        }else {
            throw "could not find people";
        }
    }catch (error) {
        response.status(404).json({error:error});
    }
});

module.exports = people;