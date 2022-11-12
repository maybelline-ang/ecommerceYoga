const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

//////////////////////////////////////////////////
// Register User
//////////////////////////////////////////////////

//* using async because of time taken to register
router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASSWORD_SECRET_KEY
    ).toString(),
  });

  try {
    const savedUser = await newUser.save();
    // 201 code: created
    res.status(201).json(savedUser);
  } catch (err) {
    // 500 code: error
    res.status(500).json(err);
  }
});

//////////////// Login ////////////////////////
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    !user && res.status(401).json("no user found");

    const hash = CryptoJS.AES.decrypt(
      user.password,
      process.env.PASSWORD_SECRET_KEY
    );

    // if any of the password are in other characters
    const InitialPassword = hash.toString(CryptoJS.enc.Utf8);

    InitialPassword !== req.body.password &&
      res.status(401).json("wrong password");

    const accessToken = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "14d" }
    );

    // using spread operator to send every other information except password
    const { password, ...others } = user._doc;

    // comes back as object so using spread operator to combine together into one object
    res.status(200).json({ ...others, accessToken });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
