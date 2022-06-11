const mongoose = require('mongoose');

const templateSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    category: String
});

module.exports = mongoose.model('Template', templateSchema);