const express = require("express");
const people = express.Router();

const {
    getAllPeople,
    getOnePeople,
    createOnePeople,
    updateOnePeople,
    deleteOnePeople,
} = require("../queries/people");

// checks that a person has the fields our table requires
const isValidPerson = (person) => person && person.name && person.description;

// Index: get all of the people from the database
people.get("/", async (req, res) => {
    try {
        const allPeople = await getAllPeople();
        res.status(200).json({ payload: allPeople });
    } catch (error) {
        res.status(500).json({ error: "could not get people" });
    }
});

// Show: get one specific person by id
people.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const person = await getOnePeople(id);
        if (person) {
            res.status(200).json({ payload: person });
        } else {
            res.status(404).json({ error: "person could not be found" });
        }
    } catch (error) {
        res.status(500).json({ error: "could not get person" });
    }
});

// Create: add a new person to the database
people.post("/", async (req, res) => {
    if (!isValidPerson(req.body)) {
        return res.status(400).json({ error: "please provide a name and description" });
    }
    try {
        const newPerson = await createOnePeople(req.body);
        res.status(201).json({ payload: newPerson });
    } catch (error) {
        res.status(500).json({ error: "could not create person" });
    }
});

// Update: replace a person's name and description
people.put("/:id", async (req, res) => {
    if (!isValidPerson(req.body)) {
        return res.status(400).json({ error: "please provide a name and description" });
    }
    try {
        const { id } = req.params;
        const updatedPerson = await updateOnePeople(id, req.body);
        if (updatedPerson) {
            res.status(200).json({ payload: updatedPerson });
        } else {
            res.status(404).json({ error: "person could not be found" });
        }
    } catch (error) {
        res.status(500).json({ error: "could not update person" });
    }
});

// Delete: remove a person from the database
people.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deletedPerson = await deleteOnePeople(id);
        if (deletedPerson) {
            res.status(200).json({ payload: deletedPerson });
        } else {
            res.status(404).json({ error: "person could not be found" });
        }
    } catch (error) {
        res.status(500).json({ error: "could not delete person" });
    }
});

module.exports = people;
