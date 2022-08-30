# Can of Books

**Author**: Jeffrey Smith and Brooke Heck

**Version**: 2.0.0

## Overview
This is a backend server for the Can of Books application. The application uses a database to store different books. The current version only allows users to make get requests and see the books already in the database, add a book to the database, and delete a book. The server queries a Mongo database and uses Mongoose to create a book Schema and Model to uniformly stored data.

## Getting Started
Run the npm install command in order to get express, cors, dotenv, and mongoose modules installed in your environment. Also, refer to the sample env file in order to get the database URI and port variables set up.

## Architecture
This is an express server and is therefore written in javascript. Cors is another tool used as middleware to help the server send and receive requests. The dotenv module is used to access environment variables from the env file. Finally Mongoose is used to interact with the mongo database. Mongoose is used to connect to the database and create entries that conform to the schema of the books database.

## Change Log
08-29-2022 4:59pm - Application successfully connects to the database and creates book entries based on the schema and model defined in books.js. It also sends that data when the server receives a get request.

08-29-2022 03:20pm - Application handles a POST request by taking in a JSON object and adding it to the database. It also handles a DELETE request by removing a book from the database using an id.

## Estimates

### Lab 11
***Name of feature: Create an Express Server*** 

Estimate of time needed to complete: 1 hr

Start time: 1300

Finish time: 1400

Actual time needed to complete: 1 hr

</br>

***Name of feature: Create a Mongo Database***

Estimate of time needed to complete: .5 hr

Start time: 1430

Finish time: 1500

Actual time needed to complete: .5 hr

</br>

***Name of feature: Create Schema and Model w/ Mongoose***

Estimate of time needed to complete: 1hr

Start time: 1500

Finish time: 1600

Actual time needed to complete: 1 hr

</br>

### Lab 12
***Name of feature: Create Book and add to Database*** 

Estimate of time needed to complete: .5 hr

Start time: 1300

Finish time: 1330

Actual time needed to complete: .5 hr

</br>

***Name of feature: Delete Book and add to Database***

Estimate of time needed to complete: .5 hr

Start time: 1330

Finish time: 1400

Actual time needed to complete: .5 hr

</br>

## Credit and Collaborations
[Collaboration with Jeffrey Smith](https://github.com/Jeffrey-S-Smith)
