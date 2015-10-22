//we need mongoose to run a model!
var mongoose = require('mongoose');

//define a schema
var playerSchema = new mongoose.Schema( {
    firstName: {
        type: String,
        default: '',
    },
    lastName: {
        type: String,
        default: '',
        required: 'Last name is required.'
    },
    number: {
        type: Number,
        default: '0'
    }
});

//allow access to this model!
module.exports = mongoose.model('Players', playerSchema);