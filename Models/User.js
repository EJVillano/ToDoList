const mongoose = require('mongoose')

const userScema = new mongoose.Schema({

    firstname: {
        type: String,
        required: [true, 'First Name is Required']
    },
    lastname: {
        type: String,
        required: [true, 'Last Name is Required']
    },
    email: {
        type: String,
        required: [true, 'Email is Required']
    },
    birthdate: {
        type: Date,
        required: [true, 'Birthday is Required']
    },
    username: {
        type: String,
        required: [true, 'Username is Required']
    },
    tasks: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Task'
    }],
    mons: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Mon'
    }]
    
})

module.exports = mongoose.model('User', userScema);