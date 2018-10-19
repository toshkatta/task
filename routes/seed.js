const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/EmployeeController');
const openingController = require('../controllers/OpeningController');

router.get('/', employeeController.seed, openingController.seed);

module.exports = router;