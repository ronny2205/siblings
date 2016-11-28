#Node.js / Express.js API and React.js fronend

##A simple API that stores data about Startup Institute alumni.

The API allows the user:
 1. Send a get request and recieve a list of all the alums in the database --> /alums
 2. Send a get request and recieve an info about a specific alum (recognized by Id) --> /alum/:id
 3. Post info about a new alum --> /alums

The API was built with TDD, using Mocha and Chai.

The database is Postgres an the ORM is Sequelize.


##Frontend Reactapp that consumes the API.
Built with create-react-app and Bootstrap


To start both the node server and the react server locally:
Install concurrently (npm install -g concurrently)
Run: `concurrently "npm start" "cd client && npm start"`