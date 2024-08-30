const mongoose = require("mongoose");

//define mongodb connection url

const url = "mongodb://localhost:27017/hotels";

mongoose.connect(url, {
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
