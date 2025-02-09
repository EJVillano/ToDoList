//[Dependencies and Modules]
const express = require("express")

// [Routing Component]
const router = express.Router();
const taskController = require("../controllers/taskController")

// [Routes]
router.post("/createTask", taskController.createTask)

router.get("/", taskController.getTask )

router.patch("/:taskId/update", taskController.updateTask )

router.delete("/:taskId/delete",taskController.deleteTask)


// [Export Route System]
module.exports = router;