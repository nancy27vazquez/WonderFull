const express = require("express");
const router = express.Router();
const Recommend = require("../models/Review");
const { verifyToken } = require("../helpers/auth");

router.get("/", verifyToken, (req, res) => {
  const { user } = req;
  Recommend.find({ owner: user._id })
    .then(recommendations => {
      res.status(200).json({ recommendations });
    })
    .catch(error => {
      res.status(500).json({ error });
    });
});

router.post("/", verifyToken, (req, res) => {
  const { user } = req;
  Recommend.create({ ...req.body, guest: user._id })
    .then(recommend => {
      res.status(200).json({ recommend });
    })
    .catch(error => {
      res.status(500).json({ error });
    });
});

router.get("/:id", verifyToken, (req, res) => {
  const { id } = req.params;
  Recommend.findById(id)
    .then(recommend => {
      res.status(200).json({ recommend });
    })
    .catch(error => {
      res.status(500).json({ error });
    });
});

router.patch("/:id", verifyToken, (req, res) => {
  const { id } = req.params;
  Recommend.findByIdAndUpdate(id, { $set: { ...req.body } }, { new: true })
    .then(recommend => {
      res.status(200).json({ recommend });
    })
    .catch(error => {
      res.status(500).json({ error });
    });
});

router.delete("/:id", verifyToken, (req, res) => {
  const { id } = req.params;
  Recommend.findByIdAndRemove(id)
    .then(recommend => {
      res.status(200).json({ recommend });
    })
    .catch(error => {
      res.status(500).json({ error });
    });
});

module.exports = router;
