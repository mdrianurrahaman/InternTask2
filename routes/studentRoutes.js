const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');

router.post('/student', studentController.createStudent);
router.put('/student/:id', studentController.updateStudent);
router.delete('/student/:id', studentController.deleteStudent);

module.exports = router;
