const express = require("express");
const router = express.Router();
const model = require("./../models/person");
router.get("/", async (req, res) => {
  try {
    const answer = await model.find();
    console.log("data fetched");
    res.status(200).json(answer);
  } catch (err) {
    console.log("error");
    res.status(500).json(err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const personId = req.params.id; // Extract the person's ID
    // from the URL parameter
    const updatedPersonData = req.body; // Updated data for the
    // person
    // Assuming you have a Person model
    const updatedPerson = await model.findByIdAndUpdate(
      personId,
      updatedPersonData,
      {
        new: true, // Return the updated document
        runValidators: true, // Run Mongoose validation
      }
    );
    if (!updatedPerson) {
      return res.status(404).json({ error: "Person not found" });
    }
    // Send the updated person data as a JSON response
    res.json(updatedPerson);
  } catch (error) {
    console.error("Error updating person:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});
router.post("/", async (req, res) => {
  try {
    const data = req.body;

    const newPerson = new model(data);
    const response = await newPerson.save();

    console.log("data saved");
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
router.get("/:workType", async (req, res) => {
  try {
    const workType = req.params.workType;
    if (workType == "chef" || workType == "manager" || workType == "waiter") {
      const response2 = await model.find({ work: workType });
      console.log("response fetched");
      res.status(200).json(response2);
    } else {
      res.status(404).json({ error: "invalid work type" });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
