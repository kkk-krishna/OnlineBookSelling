const express = require("express");
const router = express.Router();
const adminController = require("../controllers/admin");

router.get("/loginpages", adminController.AdminLogin);
router.post("/login", adminController.Adminpage);

// Route to add book to user collections
router.post('/addbook', adminController.addBookToUserCollection);

module.exports = router;
