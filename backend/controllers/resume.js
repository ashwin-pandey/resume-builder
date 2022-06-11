const Resume = require('../models/resume');
const Template = require('../models/template');
const url = process.env.url;
const mongoose = require('mongoose');

exports.getAllResume = (req, res, next) => {
    Resume.find()
        // .select('product quantity _id')
        // .populate('product','name')
        .exec()
        .then(docs => {
            res.status(200).json({
                count: docs.length,
                data: docs
            })
        })
        .catch(err => {
            res.status(500).json({
                message: {
                    error: err
                }
            });
        });
}

exports.createResume = (req, res, next) => {
    let body = req.body;
    Template.find({ template: body.template, email: body.email })
        .then(template => {

            if (!template) {

                return res.status(404).json({
                    message: "Template not found"
                });
            }
            const resume = new Resume({
                _id: mongoose.Types.ObjectId(),
                ...body
            });
            return resume.save()
        })
        .then(result => {
            console.log(result);
            res.status(201).json({
                message: 'Resume stored',
                createdResume: {
                    ...result?._doc
                }
            })
        })
        .catch(err => {
            console.log(err);
            return res.status(500).json({
                message: "Template not found"
            });
        });
}

exports.getResume = (req, res, next) => {
    Resume.findById(req.params.resumeId)
        .populate('template')
        .exec()
        .then(resume => {
            if (!resume) {
                return res.status(404).json({
                    message: 'resume not Found'
                })
            }
            res.status(200).json({
                data: resume
            })
        })
        .catch(err => {
            res.status(500).json({
                error: err
            })
        });
}

exports.deleteResume = (req, res, next) => {
    Resume.remove({ _id: req.params.resumeId })
        .exec()
        .then(result => {
            res.status(200).json({
                message: 'Resume Deleted'
            });
        })
        .catch(err => {
            console.log(err);
            return res.status(500).json({
                message: "Resume not found"
            });
        });
}
