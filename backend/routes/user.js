const router = require("express").Router();
const { verifyToken, verifyTokenAuthorization } = require("./verifyToken");

router.put("/:id", verifyTokenAuthorization, async (req, res) => {
  if (req.body.password) {
    req.body.password = CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASSWORD_SECRET_KEY
    ).toString();
  }

  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(220).json(updatedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
