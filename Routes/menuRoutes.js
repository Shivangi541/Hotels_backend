const express = require("express");
const router = express.Router();
const MenuItem = require("./../models/MenuItem");
router.post("/", async (req, res) => {
  try {
    const data = req.body;

    const newmenu = new MenuItem(data);
    const response = await newmenu.save();

    console.log("data saved");
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
router.get("/", async (req, res) => {
  try {
    const answer = await MenuItem.find();
    console.log("data fetched");
    res.status(200).json(answer);
  } catch (err) {
    console.log("error");
    res.status(500).json(err);
  }
});
module.exports = router;
