const fs = require("fs");
const path = require("path");
const { calculateProgress } = require("../utils/helpers");

exports.saveBook = (req, res) => {
  const { title, author, totalPages, currentPage, status } = req.body;

  const newBook = {
    id: Date.now(),
    title,
    author,
    totalPages: Number(totalPages),
    currentPage: Number(currentPage),
    progress: calculateProgress(currentPage, totalPages),
    status,
  };

  const filePath = path.join(__dirname, "../../data/data.json");
  const books = JSON.parse(fs.readFileSync(filePath));

  books.push(newBook);

  fs.writeFileSync(filePath, JSON.stringify(books, null, 2));

  res.json({
    message: "Book added successfully",
    data: newBook,
  });
};
