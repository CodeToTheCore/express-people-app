const db = require("../db/dbConfig");

const getAllPeople = async () => {
    return await db.any("SELECT * FROM people ORDER BY id");
};

const getOnePeople = async (peopleId) => {
    return await db.oneOrNone("SELECT * FROM people WHERE id=$1", peopleId);
};

const createOnePeople = async ({ name, description }) => {
    return await db.one("INSERT INTO people (name, description) VALUES ($1, $2) RETURNING *", [name, description]);
};

const updateOnePeople = async (id, { name, description }) => {
    return await db.oneOrNone("UPDATE people SET name=$1, description=$2 WHERE id=$3 RETURNING *", [name, description, id]);
};

const deleteOnePeople = async (peopleId) => {
    return await db.oneOrNone("DELETE FROM people WHERE id=$1 RETURNING *", peopleId);
};

module.exports = {
    getAllPeople,
    getOnePeople,
    createOnePeople,
    updateOnePeople,
    deleteOnePeople,
};
