const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { send } = require("../helpers/mailer");

router.post("/login", (req, res, next) => {
  const { password, email } = req.body;
  User.findOne({ email })
    .then(user => {
      const isValid = bcryptjs.compareSync(password, user.password);
      if (!isValid)
        return res
          .status(401)
          .json({ error: "Password not matching correctly" });

      jwt.sign(
        {
          id: user._id
        },
        process.env.SECRET,
        (error, token) => {
          delete user._doc.password;

          if (error) return res.status(500).json({ error });
          res.status(200).json({ user, token });
        }
      );
    })
    .catch(error => {
      res.status(404).json({ error, msg: "Invalid email" });
    });
});

router.post("/signup", (req, res, next) => {
  const { password } = req.body;
  console.log(req.body);

  if (password.length < 8)
    return res
      .status(500)
      .json({ error: "Password should be at least 8 characters long" });

  const salt = bcryptjs.genSaltSync(10);
  const hashedPassword = bcryptjs.hashSync(password, salt);

  User.create({ ...req.body, password: hashedPassword })
    .then(user => {
      const options = {
        filename: "register",
        email: user.email,
        message: "Confirm your email",
        subject: "Welcome to WonderFull!"
      };

      send(options);

      jwt.sign(
        {
          id: user._id
        },
        process.env.SECRET,
        (error, token) => {
          delete user._doc.password;

          if (error) return res.status(500).json({ error });
          res.status(200).json({ user, token });
        }
      );
    })
    .catch(error => {
      res.status(404).json({
        error,
        msg: "There was an error creating this user, please try again"
      });
    });
});

module.exports = router;
