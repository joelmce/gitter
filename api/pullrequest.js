const express = require("express");
const router = express.Router();

async function newPullRequestEvent(req, res) {
  const { title } = req.body;

  console.log(title);

  res.send("ok");
}

router.post("/", newPullRequestEvent);

module.exports = router;
