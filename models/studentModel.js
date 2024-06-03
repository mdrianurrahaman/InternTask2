const connection = require('../config/db');

const Student = {
    insert: (student, callback) => {
        const insertStudent = `
            INSERT INTO student (student_name, age, phone_no, class)
            VALUES (?, ?, ?, ?)
        `;
        connection.query(insertStudent, [student.student_name, student.age, student.phone_no, student.class], callback);
    },
    update: (id, student, callback) => {
        const updateStudent = `
            UPDATE student
            SET student_name = ?, age = ?, phone_no = ?, class = ?
            WHERE student_id = ?
        `;
        connection.query(updateStudent, [student.student_name, student.age, student.phone_no, student.class, id], callback);
    },
    delete: (id, callback) => {
        const deleteStudent = `
            DELETE FROM student
            WHERE student_id = ?
        `;
        connection.query(deleteStudent, [id], callback);
    }
};

module.exports = Student;
