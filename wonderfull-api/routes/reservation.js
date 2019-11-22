const express = require("express");
const router = express.Router();
const Reservation = require("../models/Reservation");

router.get("/", (req, res) => {
  const {user} = req;
  Reservation.find({owner: user._id})
    .populate("owner", "username profilepic")
    .populate('property', 'title, price coordinates address images')
    .then(reservations => {
      res.status(200).json({ reservations });
    })
    .catch(error => {
      res.status(500).json({ error });
    });
});

router.post("/", (req, res) => {
  const { user } = req;
  const images = files.map(file => file.secure_url);
  /*Crear la propiedad con todo lo que trae el body */
  Reservation.create({ ...req.body, guest: user._id })
  .populate("owner", "username profilepic")
  .populate('property', 'title, price coordinates address images')
    .then(reservation => {
      res.status(200).json({ reservation });
    })
    .catch(error => {
      {
        res.status(500).json(patch{ error });
      }
    });
});

/* TRAER UNA PROPIEDAD PARA EDITAR Y BORRAR */
router.get("/:id", (req, res) => {
  const { id } = req.params;
  Reservation.findById(id)
  .populate("owner", "username profilepic")
  .populate('property', 'title, price coordinates address images')
    .then(reservation => {
      Reservation.populate(reservation, {
        path: "owner",
        select: "username profilepic"
      });
      res.status(200).json({ reservation });
    })
    .catch(error => {
      res.status(500).json({ error });
    });
});

/* PATCH RESERVATION */
router.patch("/:id", (req, res) => {
  const { id } = req.params;
  Reservation.findByIdAndUpdate(id, { $set: { ...req.body } }, { new: true })
    .populate("owner", "username profilepic")
    .then(reservation => {
      res.status(200).json({ reservation });
    })
    .catch(error => {
      res.status(500).json({ error });
    });
});

/* DELETE RESERVATION */
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  Reservation.findByIdAndRemove(id, { $set: { ...req.body } }, { new: true })
    .populate("owner", "username profilepic")
    .then(reservation => {
      res.status(200).json({ reservation });
    })
    .catch(error => {
      res.status(500).json({ error });
    });
});


module.exports = router;