const all_students_data = "SELECT * FROM students";
const dtudents_by_id = "SELECT * FROM students WHERE std_id = $1";
const students_update_by_id = "UPDATE students SET std_name = $1, std_dob = $2, std_age = $3, std_email = $4 where std_id = $5";
const students_email_exist = "SELECT * FROM students WHERE std_email = $1";
const delete_student_by_id = "DELETE FROM students WHERE std_id = $1";
const add_new_student = "INSERT INTO students (std_name,std_dob,std_age,std_email) VALUES ($1,$2,$3,$4)";

module.exports = {
    all_students_data,
    dtudents_by_id,
    students_update_by_id,
    students_email_exist,
    delete_student_by_id,
    add_new_student
};