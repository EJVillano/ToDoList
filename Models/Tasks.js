const mongoose = require('mongoose')

const taskScema = new mongoose.Schema({

    task: {
        type: String,
        required: [true, 'Task is Required']
    },
    description: {
        type: String,
        required: false
    },
    status: {
        type: String,
        enum: ['not started', 'In ProgressEvent', 'Done'],
        default: 'not started'
    },
    dueDate: {
        type: Date,
        required: true
    },
    completedAt: {
        type: Date,
        default: null
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
})

module.exports = mongoose.model('Task', taskScema);