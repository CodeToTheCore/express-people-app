DROP DATABASE IF EXISTS people_dev;

CREATE DATABASE people_dev;

\c people_dev;

CREATE TABLE people (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT NOT NULL
);
