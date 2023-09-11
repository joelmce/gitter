const express = require("express");
const router = express.Router();

async function newPullRequestEvent(req, res) {
  const bod = req.body;

  console.log(bod);

  res.send("ok");
}

router.post("/", newPullRequestEvent);

module.exports = router;
