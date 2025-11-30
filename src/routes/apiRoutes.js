const express = require("express");
const router = express.Router();

router.get("/test", (req, res) => {
  res.json({ message: "API is working correctly" });
});

router.post("/books", (req, res) => {
  const { title, author, pages } = req.body;

  res.json({
    message: "Book added",
    data: {
      title,
      author,
      pages
    }
  });
});

module.exports = router;