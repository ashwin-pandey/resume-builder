const mongoose = require('mongoose');

const resumeSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    template: { type : mongoose.Schema.Types.ObjectId, ref : 'Template', required: true },
    data: {
        name: String,
        email: String,
        address: String,
        phone: Number,
        company: String
    }
});

module.exports = mongoose.model('Resume', resumeSchema);