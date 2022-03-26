const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
name: {
    type: String,
    required: [true,"Must add a name"],
    trim: true,
    maxlength:[20,"name must be under 20 character"]
},
completed: {
    type: Boolean,
    default: false
}
})

module.exports = mongoose.model('Task',TaskSchema)