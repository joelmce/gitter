const express = require("express");
const app = express();

const pullRequest = require("./api/pullrequest.js");

app.use(express.json());

app.use("/api/pr", pullRequest);
