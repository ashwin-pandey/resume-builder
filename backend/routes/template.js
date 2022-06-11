const express = require('express');
const router = express.Router();
const checkAuth = require('../middlewares/check-auth');
const templateCtrl = require('../controllers/template');

router.get('/', checkAuth, templateCtrl.getAllTemplate);

// TODO: add all APIs for customization
// router.post('/', checkAuth, templateCtrl.createTemplate);

// router.get('/:orderId', checkAuth, templateCtrl.getTemplate);

// router.delete('/:orderId', checkAuth, templateCtrl.deleteTemplate)

module.exports = router;
