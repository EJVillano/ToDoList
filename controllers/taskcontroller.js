// [Depenendencies and Modules]

const Task = require("../Models/Tasks");


module.exports.createTask = (req, res) =>{


    let newTask = new Task({
        task : req.body.task,
        description : req.body.description,
        dueDate : req.body.dueDate
    }); 

    Task.findOne({task : req.body.task})
    .then(exisitngTask =>{
        if (exisitngTask){
            return res.status(409).send({error:'Task already exists'});
        }
        return newTask.save()
        .then(savedTask =>{
            return res.status(201).send({ message: savedTask });
        })
        .catch(saveErr =>{
            console.error("Error in saving the Product: ", saveErr)
                    return res.status(500).send({error:'Failed to save the Task'})
        })
    })
    .catch(findErr =>{
        console.error("Error in finding the Task: ", findErr)
        return res.status(500).send({error: 'Error finding the Task'})
    })
    

};

module.exports.getTask = (req, res) =>{

}