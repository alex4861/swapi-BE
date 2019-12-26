const mongoose = require('mongoose');


const PostSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    manufacturer: {
        type: String,
        required: true
    },
    cost: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Post', PostSchema);