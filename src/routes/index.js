const express = require("express");
const router = express.Router();
const data = require("../../data/data.json");

router.get("/", (req, res) => {
  res.send(
    "<h1>Reading Tracker Home</h1><p>Go to /books to see your reading list</p>"
  );
});

router.get("/about", (req, res) => {
  res.send(
    "<h2>About Reading Book Tracker</h2><p>Track your reading progress easily.</p>"
  );
});

router.get("/books", (req, res) => {
  res.json({
    message: "List of all books",
    data,
  });
});

module.exports = router;
