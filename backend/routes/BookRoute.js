const express = require("express");
const bookRouter = express.Router();
const bookController = require('../controller/BookController');

bookRouter.get("/", bookController.getAllBook )
bookRouter.post("/addbook", bookController.InsertBook);
bookRouter.get("/:id", bookController.getBookById);

bookRouter.put("/:id", bookController.updateBook);
bookRouter.delete("/:id", bookController.DeleteBook);

module.exports = bookRouter;