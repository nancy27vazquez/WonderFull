const express = require("express");
const router = express.Router();
const Wonder = require("../models/Wonder");
const uploader = require("../helpers/multer");
/*const { verifyToken } = require("../helpers/auth");*/

router.get("/", (req, res) => {
  Wonder.find()
    .populate("whoRecommends", "username")
    .then(wonders => {
      res.status(200).json({ wonders });
    })
    .catch(error => {
      res.status(500).json({ error });
    });
});

router.post("/", uploader.array("images"), (req, res) => {
  const { files } = req;
  const images = files.map(file => file.secure_url);
  Wonder.create({ ...req.body, images })
    .then(wonder => {
      Wonder.populate(wonder, {
        path: "whoRecommends",
        select: "username"
      });
      res.status(200).json({ wonder });
    })
    .catch(error => {
      res.status(500).json({ error });
    });
});

router.post("/search_one", (req, res) => {
  const { wonder_id } = req.body;
  Wonder.findById(wonder_id)
    .populate("whoRecommends", "username")
    .then(wonder => {
      res.status(200).json({ wonder });
    })
    .catch(error => {
      res.status(500).json({ error });
    });
});

router.patch("/edit_one", (req, res) => {
  const { wonder_id } = req.params;
  Wonder.findByIdAndUpdate(wonder_id, { $set: { ...req.body } }, { new: true })
    .populate("whoRecommends", "username")
    .then(wonder => {
      res.status(200).json({ wonder });
    })
    .catch(error => {
      res.status(500).json({ error });
    });
});

router.delete("/delete_one", (req, res) => {
  const { wonder_id } = req.params;
  Wonder.findByIdAndRemove(wonder_id)
    .then(wonder => {
      res.status(200).json({ wonder });
    })
    .catch(error => {
      res.status(500).json({ error });
    });
});

module.exports = router;
