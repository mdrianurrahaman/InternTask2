const Student = require('../models/studentModel');

exports.createStudent = (req, res) => {
    const student = req.body;
    Student.insert(student, (err, results) => {
        if (err) {
            console.error('Error inserting data: ' + err.stack);
            res.status(500).send('Error inserting data');
            return;
        }
        res.status(200).send('Data inserted successfully');
    });
};

exports.updateStudent = (req, res) => {
    const { id } = req.params;
    const student = req.body;
    Student.update(id, student, (err, results) => {
        if (err) {
            console.error('Error updating data: ' + err.stack);
            res.status(500).send('Error updating data');
            return;
        }
        if (results.affectedRows === 0) {
            res.status(404).send('Student not found');
            return;
        }
        res.status(200).send('Data updated successfully');
    });
};

exports.deleteStudent = (req, res) => {
    const { id } = req.params;
    Student.delete(id, (err, results) => {
        if (err) {
            console.error('Error deleting data: ' + err.stack);
            res.status(500).send('Error deleting data');
            return;
        }
        if (results.affectedRows === 0) {
            res.status(404).send('Student not found');
            return;
        }
        res.status(200).send('Data deleted successfully');
    });
};

