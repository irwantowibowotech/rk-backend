const express = require("express");
const router = express.Router();
const {
  signup,
  signin,
  requireSignIn,
} = require("../../controllers/admin/auth");

router.post("/admin/signin", signin);
router.post("/admin/signup", signup);

router.get("/profile", requireSignIn, (req, res) => {
  res.status(200).json({ user: "Profile" });
});

module.exports = router;
