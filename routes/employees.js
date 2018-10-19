const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/EmployeeController');

router.get('/', employeeController.getEmployees);

module.exports = router;