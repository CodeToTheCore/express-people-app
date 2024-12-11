const pgp = reqire("pg-Promise")(); //intializing pg-promise
require("dotenv").config();

const {PG_HOST, PG_USER, PG_PORT, PG_DATABASE} = process.env;
console.log(PG_HOST)
// const PG_HOST = process.env.PG_HOST

const cn = {
    host: PG_HOST,
    user: PG_USER,
    port: PG_PORT,
    database: PG_DATABASE
}

// the connectionb object connects our  servere to the database so that it can request and receive the data the client is requesting

const db = pgp(cn);

module.exports = db;