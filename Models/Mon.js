const mongoose = require('mongoose')

const monScema = new mongoose.Schema({
    monDex:{
        type: Number,
    },
    picture:{
        type: Buffer,
        default: require('../taskmons/000.jpeg')
    },
    name: {
        type: String,
        required: true 
    },
    level: {
        type: Number,
        default: 1
    },
    exp: {
        type: Number,
        default: 0
    },
    evolves:{
        type: Boolean
    },
    evolvesAt:{
        type: Number
    },
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        default: null
    }
    
    
    
})

module.exports = mongoose.model('Mon', monScema);