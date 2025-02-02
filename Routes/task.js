//[Dependencies and Modules]
const express = require("express")

// [Routing Component]
const router = express.Router();
const taskController = require("../controllers/taskController")

// [Routes]
router.post("/createTask", taskController.createTask)

router.get("/", taskController.getTask )

// [Export Route System]
module.exports = router;