const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({
    name: "HHQ",
    age: 27,
  });
});

module.exports = router;
