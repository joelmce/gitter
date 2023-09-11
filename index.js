const express = require("express");
const app = express();

const pullRequest = require("./api/pullrequest.js");

app.use(express.json());

app.use("/api/pr", pullRequest);

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
