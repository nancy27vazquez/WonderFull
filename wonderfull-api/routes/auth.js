const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const { send } = require("../helpers/mailer");
const jwt = require("jsonwebtoken");

/* LOGIN ROUTE */
router.post("/login", (req, res, next) => {
  const { password, email } = req.body;
  User.findOne({ email })
    .then(user => {
      const isValid = bcrypt.compareSync(password, user.password);
      if (!isValid)
        return res.status(401).json({ err: "Password not matching correctly" });

      jwt.sign(
        {
          id: user._id
        },
        process.env.SECRET,
        (err, token) => {
          delete user._doc.password;

          if (err) return res.status(500).json({ err });
          res.status(200).json({ user, token });
        }
      );
    })
    .catch(err => {
      res.status(404).json({ err, msg: "Invalid email" });
    });
});

/* SIGNUP ROUTE */
router.post("/signup", (req, res, next) => {
  const { password } = req.body;

  /*VALIDATE PASS LENGTH */
  if (password.lenght <= 8)
    return res
      .status(500)
      .json({ err: "Password should be at least 8 characters long" });

  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(password, salt);

  User.create({ ...req.body, password: hashedPassword })
    .then(user => {
      // const options = {
      //   filename: "register",
      //   email: user.email,
      //   message: "Confirm your email",
      //   subject: "Welcome to WonderFull!"
      // };

      // send(options);

      jwt.sign(
        {
          id: user._id
        },
        process.env.SECRET,
        (err, token) => {
          delete user._doc.password;

          if (err) res.status(500).json({ err });
          res.status(200).json({ user, token });
        }
      );
    })
    .catch(err => {
      res.status(404).json({
        err,
        msg: "There was an error creating this user, please try again"
      });
    });
});

module.exports = router;
