const express = require("express");

const { login, register } = require("../controllers/authController");
const { checkCurrentUser } = require("../middleware/checkCurrentUser");
const { getCurrentUser } = require("../controllers/authController");
const upload = require("../cloudinary/multer");
const Router = express.Router();

Router.route("/").get(checkCurrentUser, getCurrentUser);
Router.route("/register").post(upload.single("avatar"), register);
Router.route("/login").post(login);

module.exports = Router;
