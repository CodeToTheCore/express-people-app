# Express People App

A RESTful CRUD API for managing people, built with Express and PostgreSQL. Built during the Pursuit Fellowship (November–December 2024) to practice routing, controllers, and database queries.

## Endpoints

| Method | Route | What it does |
| --- | --- | --- |
| GET | `/people` | List every person |
| GET | `/people/:id` | Get one person (404 if not found) |
| POST | `/people` | Create a person (`name` and `description` required) |
| PUT | `/people/:id` | Update a person |
| DELETE | `/people/:id` | Delete a person |

Responses are JSON shaped like `{ "payload": ... }`, or `{ "error": "..." }` when something goes wrong.

## Built with

Node.js, Express, PostgreSQL, pg-promise, dotenv

## Project structure

```
app.js            Express app and routes
server.js         starts the server
controllers/      route handlers
queries/          SQL queries
db/               database connection, schema, and seed data
```

## Run it locally

1. Install dependencies:
   ```bash
   npm install
   ```
2. Copy `.env.example` to `.env` and set your Postgres user.
3. Create and seed the database:
   ```bash
   npm run db:schema
   npm run db:seed
   ```
4. Start the server:
   ```bash
   npm start
   ```
5. Visit http://localhost:3000/people.
