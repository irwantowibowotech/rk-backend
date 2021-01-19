const express = require("express");
const router = express.Router();
const { signup, signin, requireSignIn } = require("../controllers/auth");

router.post("/signin", signin);
router.post("/signup", signup);

// router.get("/profile", requireSignIn, (req, res) => {
//   res.status(200).json({ user: "Profile" });
// });

module.exports = router;
