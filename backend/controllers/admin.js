const userModel4 = require("../Models/bookspage.js");
const userModel3 = require("../Models/userDetail");
const sellmodel = require("../Models/sellbook.js");
const adminmodel = require("../Models/adminmodel.js");
const path = require("path");
const mongoose = require('mongoose');
const {bookmodel} = require("../Models/bookcollection.js");

class AdminController {
  
  async AdminLogin(req, res) {
    res.sendFile(path.join(__dirname, "../views/Admin.html"));
  }

  async userAdmin(req, res) {
    try {
      // Check if the ID is a valid MongoDB ObjectId
      if (!mongoose.Types.ObjectId.isValid(req.params.admin)) {
        const book = await userModel4.find();
        const usersColl = await userModel3.find();
        const sell = await sellmodel.find();
        const arr = {
          usersdata: usersColl,
          books: book,
          sellbook: sell,
        };
        return res.status(200).send({ data: arr, admin: null });
      }

      const admins = await adminmodel.findOne({ _id: req.params.admin });
      const book = await userModel4.find();
      const usersColl = await userModel3.find();
      const sell = await sellmodel.find();
      const arr = {
        usersdata: usersColl,
        books: book,
        sellbook: sell,
      };
      return res.status(200).send({ data: arr, admin: admins });
    } catch (error) {
      console.error('Error in userAdmin:', error);
      return res.status(500).send({ error: "Internal server error" });
    }
  }

  async Adminpage(req, res) {
    const email = req.body.email;
    const pass = req.body.password;

    await adminmodel.findOne({ username: email }).then((user) => {
      if (!user) {
        return res.send("Admin is not available");
      } else {
        if (user.password === pass) {
          // res.redirect("/adminhome/" + user._id);
          return res.json({ success: true, message: "Login successful", userId: user._id });
        } else {
          return res.json({ success: false, message: "Password wrong" });
        }
      }
    });
  }

  async BookAdmin(req, res) {
    try {
      // Check if the ID is a valid MongoDB ObjectId
      if (!mongoose.Types.ObjectId.isValid(req.params.admin)) {
        const book = await userModel4.find();
        const usersColl = await userModel3.find();
        const sell = await sellmodel.find();
        const arr = {
          usersdata: usersColl,
          books: book,
          sellbook: sell,
        };
        return res.status(200).send({ data: arr, admin2: null });
      }

      const admins = await adminmodel.findOne({ _id: req.params.admin });
      const book = await userModel4.find();
      const usersColl = await userModel3.find();
      const sell = await sellmodel.find();
      const arr = {
        usersdata: usersColl,
        books: book,
        sellbook: sell,
      };
      return res.status(200).send({ data: arr, admin2: admins });
    } catch (error) {
      console.error('Error in BookAdmin:', error);
      return res.status(500).send({ error: "Internal server error" });
    }
  }

  async addBookToUserCollection(req, res) {
    try {
      // Extract book details from request body
      const {
        Title, Author, Price, Publication, 
        Language, ImageUrl, ISBN_10, ISBN_13, 
        Genre, MRP, Discount, count
      } = req.body;

      // Create a new book in the book collection
      const newBook = new bookmodel({
        Title,
        Author,
        Price,
        Publication,
        Language,
        ImageUrl,
        ISBN_10,
        ISBN_13,
        Genre,
        MRP,
        Discount,
        count: count || 1
      });

      // Save the book
      const savedBook = await newBook.save();

      // Respond with success message
      res.status(201).json({
        message: 'Book added successfully',
        book: savedBook
      });
    } catch (error) {
      console.error('Error adding book:', error);
      res.status(500).json({
        message: 'Failed to add book',
        error: error.message
      });
    }
  }
}

// Export an instance of the AdminController
module.exports = new AdminController();
