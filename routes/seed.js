const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/EmployeeController');
const openingController = require('../controllers/OpeningController');

router.get('/employees', employeeController.seed);
router.get('/openings', openingController.seed);

module.exports = router;