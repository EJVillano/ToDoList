//[Dependencies and Modules]
const express = require("express")

// [Routing Component]
const router = express.Router();
const taskController = require("../controllers/task.js")

// [Routes]
router.post("/", taskController.createTask)

// [Export Route System]
module.exports = router;