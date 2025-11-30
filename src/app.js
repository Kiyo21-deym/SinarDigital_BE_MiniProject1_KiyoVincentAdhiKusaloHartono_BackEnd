const express = require("express");
const app = express();

const indexRoutes = require("./routes/index");
const apiRoutes = require("./routes/apiRoutes");
const errorHandler = require("./middlewares/errorHandler");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", indexRoutes);
app.use("/api", apiRoutes);

app.use(errorHandler);

module.exports = app;
