const express = require('express');
const router = express.Router();
const openingController = require('../controllers/OpeningController');

router.get('/', openingController.getOpenings);
router.get('/:id', openingController.getOpeningById);

module.exports = router;