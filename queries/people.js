const peoples = require("../data/people");
const db = require("../db/dbConfig")

const getAllPeople = async () =>{
    try{
        const people = await db.any("SELECT + FROM peoples");
        return anime;
    }catch(error){
        return error;
    }
};


const getOnePeople = async (peopleId) =>{
    try{
        const peoples = await db.one("SELECT * FROM peoples id=$1", peopleId);
        return peoples;

}catch (error){
    return error;
}
};

const createOnePeople = async ({name,description})=>{ // people
    // const {name, description} = people
    // people.name
    // people.description
    try{
        const newPeople = await db.one("INSERT INTO animes (name, description)Values ($1, $2) RETURNING *", [name, description])
        return newPeople;
    }catch(error){
        return error;
    }
}
const updateOnePeople = async( id, people)=>{
    const {name, description} = body;
    try{
        const updatePeople = await db.one("UPDATE peoples SET name=$1, description=$2 Where id=$3 RETURNING *", [name, description, id]);
        return updatePeople;
    }catch (error){
        return error;
    }
}

const deleteOnePeople = async (animeId) =>{
    try{
        const deletedPeople = await db.one("DELETE FROM people WHERE id=$1 RETURNING *", animeId);
       return deletedPeople;
    }catch(error){
        return error
    }
}


module.exports = {
    getAllPeople,
    getOnePeople,
    createOnePeople,
    updateOnePeople,
    deleteOnePeople
}