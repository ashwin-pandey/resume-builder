const mongoose = require('mongoose');

const resumeSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    template: { type: mongoose.Schema.Types.ObjectId, ref: 'Template', required: true },
    qrGenerated: { type: Boolean, required: false, default: false },
    data: {
        firstName: String,
        lastName: String,
        email: { type: String, required: true },
        designation: { type: String, required: true },
        phone: { type: Number, required: true },
        city: { type: String, required: true },
        state: { type: String, required: true },
        skills: [{
            name: String
        }],
        experience: [
            {
                company: { type: String, required: true },
                from: { type: String, required: true },
                to: { type: String },
                description: { type: String },
                designation: { type: String }
            }
        ],
        education: [
            {
                degree: String,
                college: String,
                from: { type: String, required: true },
                to: { type: String },
                score: { type: String }
            }
        ],
    }
});

module.exports = mongoose.model('Resume', resumeSchema);