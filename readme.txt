
# Node server 

## Part 1
This section includes five APIs that utilize MongoDB as the database and Mongoose to establish connections and perform read operations on the data. Each API endpoint returns a response as an array of objects

## Part 2
To ensure seamless querying of the data, individual data entries were created or added to the database. This was necessary as some fields were in string format instead of numbers, which would have made querying the data challenging. The only modification made was to change the type of value in the fields for income and phone price.

## Part 3
The 'database' folder contains the schema and model for our database.

## How to run the app
 1) Clone the repo 
 2) initialize npm 
 3) rum command {node index.js}

### Key information 

 1) The server runs on port 8000.
 2) App uses CORS for removing cross origin    errors.


