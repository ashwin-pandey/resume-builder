const express = require('express');
const router = express.Router();
const checkAuth = require('../middlewares/check-auth');
const resumeCtrl = require('../controllers/resume');

router.get('/', checkAuth, resumeCtrl.getAllResume);

router.post('/', checkAuth, resumeCtrl.createResume);

router.get('/:resumeId', checkAuth, resumeCtrl.getResume);

router.delete('/:resumeId', checkAuth, resumeCtrl.deleteResume)

module.exports = router;
