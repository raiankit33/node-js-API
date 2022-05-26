let mongoose = require('mongoose');

const Employee = mongoose.model('Employee',{
    name: {
        type: String,
        required:false
    },
    email: {
        type:String,
        required:false
    }, 
    department: {
        type:String,
        required:false
    },
    status: {
        type:String,
        required:false
    }
});



module.exports = {Employee}