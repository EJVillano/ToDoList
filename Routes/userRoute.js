//[Dependencies and Modules]
const express = require("express")

// [Routing Component]
const router = express.Router();
const userController = require("../controllers/usercontroller")

// [Routes]
router.post("/register", userController.registerUser)

router.post("/login", userController.loginUser)

router.get("/:userId", userController.getUser)
// [Export Route System]
module.exports = router;