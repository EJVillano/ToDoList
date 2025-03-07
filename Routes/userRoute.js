//[Dependencies and Modules]
const express = require("express")

// [Routing Component]
const router = express.Router();
const userController = require("../controllers/usercontroller")
const { verify, verifyAdmin } = require("../auth.js");

// [Routes]
router.post("/register", userController.registerUser)

router.post("/login", userController.loginUser)

router.get("/details", verify, userController.getUserDetails)

router.get("/:userId", userController.getUser)


// [Export Route System]
module.exports = router;