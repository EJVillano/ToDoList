//[Dependencies and Modules]
const express = require("express")

// [Routing Component]
const router = express.Router();
const userController = require("../controllers/usercontroller")

// [Routes]
router.post("/register", userController.registerUser)


// [Export Route System]
module.exports = router;