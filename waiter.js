const express = require("express");
const app = express();
const db = require("./db");
const bodyParser = require("body-parser");
app.use(bodyParser.json()); // stores in req.body()
require("dotenv").config();

const PORT = process.env.PORT || 2000;
const MenuItem = require("./models/MenuItem");
const personRoutes = require("./Routes/personRoutes");
app.use("/person", personRoutes);

const menuItemRoutes = require("./Routes/menuRoutes");
app.use("/MenuItem", menuItemRoutes);

app.get("/", function (req, res) {
  res.send(
    "Welcome to my hotel... How i can help you ?, we have list of menus"
  );
});

app.listen(PORT, () => {
  console.log("listening on port 2000");
});
