const pgp = require("pg-promise")(); // initializing pg-promise
require("dotenv").config();

const { PG_HOST, PG_USER, PG_PORT, PG_DATABASE, PG_PASSWORD } = process.env;

const cn = {
    host: PG_HOST,
    user: PG_USER,
    port: PG_PORT,
    database: PG_DATABASE,
    password: PG_PASSWORD,
};

// the connection object connects our server to the database so that it can request and receive the data the client is requesting
const db = pgp(cn);

module.exports = db;
