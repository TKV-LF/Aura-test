const express = require("express");

const Model = require("../models/booking");

const router = express.Router();

const BookingStatus = {
  PENDING: "pending",
  CONFIRMED: "confirmed",
  CANCELLED: "cancelled",
  COMPLETED: "completed",
};

//Post Method
router.post("/create", async (req, res) => {
  const model = new Model(req.body);

  try {
    const newModel = await model.save();
    res.status(201).json(newModel);
  } catch (err) {
    res.status(400).json({ message: err.message, body: req.body });
  }
});

//Get all Method
router.get("/getAll", async (req, res) => {
  try {
    const data = await Model.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Get by ID Method
router.get("/getOne/:id", async (req, res) => {
  try {
    const data = await Model.findById(req.params.id);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Update by ID Method
router.patch("/update/:id", async (req, res) => {
  try {
    const data = await Model.findByIdAndUpdate(
      req.params.id,
      {
        ...req.body,
        lastUpdate: Date.now(),
      },
      { new: true }
    );
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update status by ID Method
router.patch("/updateStatus/:id", async (req, res) => {
  try {
    const data = await Model.findByIdAndUpdate(
      req.params.id,
      {
        status: req.body.status,
        lastUpdate: Date.now(),
      },
      { new: true }
    );
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Delete by ID Method
router.delete("/delete/:id", async (req, res) => {
  try {
    const data = await Model.findByIdAndDelete(req.params.id);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
