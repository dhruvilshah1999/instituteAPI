const pool = require("../../db")
const queries = require("../student/queries")

const getStudents = (req, res)=>{
    pool.query(queries.all_students_data,(error,results)=>{
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const getStudentsById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.dtudents_by_id, [id],(error,results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
}

const updateStudentByid = (req, res) => {
    const id = parseInt(req.params.id);
    const {std_name,std_dob,std_age,std_email} = req.body;
    pool.query(queries.dtudents_by_id,[id],(error,result)=>{
        if(error) throw error;
        student_status = !result.rows.length;
        if(student_status){
            res.send("Student does not exist");
        }
    });
    pool.query(queries.students_update_by_id, [std_name,std_dob,std_age,std_email,id],(error,result)=>{
        if (error) throw error;
        res.status(200).send("Student Update Successfully");
    });    
}

const deleteStudentByid = (req, res) => {
    
}

module.exports = {
    getStudents,
    getStudentsById,
    updateStudentByid,
    deleteStudentByid};