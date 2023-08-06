const all_students_data = "SELECT * FROM students";
const dtudents_by_id = "SELECT * FROM students WHERE std_id = $1";
const students_update_by_id = "UPDATE students SET std_name = $1, std_dob = $2, std_age = $3, std_email = $4 where std_id = $5";
const students_email_exist = "SELECT * FORM students where std_email = $1";

module.exports = {
    all_students_data,
    dtudents_by_id,
    students_update_by_id,
    students_email_exist};