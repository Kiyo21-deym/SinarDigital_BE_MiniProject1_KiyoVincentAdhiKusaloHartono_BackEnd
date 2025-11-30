module.exports = (req, res, next) => {
  const { title, author, totalPages, currentPage } = req.body;

  if (!title || !author || !totalPages) {
    return res.status(400).json({
      error: "Title, author, and totalPages are required",
    });
  }

  next();
};
