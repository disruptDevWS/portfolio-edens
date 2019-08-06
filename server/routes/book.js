const express = require("express");
const router = express.Router();
const bookCtrl = require("../controllers/book");

//Create book instance
router.post("", bookCtrl.saveBook);

//Read all book instances
router.get("", bookCtrl.getBooks);

//Update book instance
router.patch("/:id", bookCtrl.updateBook);

//Delete book instance
router.delete("/:id", bookCtrl.deleteBook);

module.exports = router;
