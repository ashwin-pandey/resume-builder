const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    company: { type: String, required: true },
    from: { type: Date, required: true },
    to: { type: Date },
    description: { type: String },
    designation: { type: String }
});

module.exports = mongoose.model('Experience', productSchema)