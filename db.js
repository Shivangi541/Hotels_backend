const mongoose = require("mongoose");
require("dotenv").config();

//define mongodb connection url

//const url = "mongodb://localhost:27017/hotels";
const mongourl = process.env.MONGO_URL;

mongoose.connect(mongourl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

//event listeners

db.on("connected", () => {
  console.log("connection established");
});

db.on("error", (e) => {
  console.log("there is an error");
});

// db.on("disconnected", () => {
//   console.log("connection broken");
// });

//export the db file

module.exports = db;
