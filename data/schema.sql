DROP DATABASE IF EXISTS peoples_dev;

CREATE DATABASE peoples_dev;

\c animania_dev;

CREATE TABLE people (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT NOT NULL
);