

"use strict"
//creates one place for making the connection to the db
// Bring Mongoose into the app
const mongoose = require( 'mongoose' );
const keys = require('./../config/keys');

// Build the connection string
const dbURI = process.env.MONGOLAB_URI || process.env.DB_URI_LOCAL;
// Create the database connection
mongoose.connect(dbURI);
//for previous mongoose versions use mongoose.connect(dbURI, { useMongoClient: true }) in case of conflict with express-sessions;

// CONNECTION EVENTS
// When successfully connected
mongoose.connection.on('connected', ()=> {
  console.log('Mongoose default connection open to ' + dbURI);
});

// If the connection throws an error
mongoose.connection.on('error',(err)=> {
  console.log('Mongoose default connection error: ' + err);
});

// When the connection is disconnected
mongoose.connection.on('disconnected', ()=> {
  console.log('Mongoose default connection disconnected');
});

// If the Node process ends, close the Mongoose connection
process.on('SIGINT', ()=>{
  mongoose.connection.close(()=>{
    console.log('Mongoose default connection disconnected through app termination');
    process.exit(0);
  });
});
