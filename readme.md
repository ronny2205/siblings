#Node.js / Express.js API

##A simple API that stores data about Startup Institute alumni.

The API allows the user:
1. Send a get request and recieve a list of all the alums in the database --> /alums
2. Send a get request and recieve an info about a specific alum (recognized by Id) --> /alum/:id
3. Post info about a new alum --> /alums

The API was built with TDD, using Mocha and Chai.

The database is Postgres an the ORM is Sequelize.