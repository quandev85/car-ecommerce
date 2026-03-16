require("dotenv").config();
const express = require("express");
const app = express();
const morgan = require("morgan");
const helmet = require("helmet");
const compression = require("compression");
// Middleware
app.use(morgan("dev"));
app.use(helmet());
app.use(compression());
// db

require("./db/init.mongo");

// router
app.use("/", require("./routes/index"));

module.exports = app;
