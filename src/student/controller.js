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
    })
}

const updateStudentByid = (req, res) => {
    const id = parseInt(req.params.id);
    const {name,dob,age,email} = req.body;
    pool.query(queries.students_email_exist,[email],(error,result)=>{
        if(error) throw error;
        res.
    })
    pool.query(queries.students_update_by_id, [name,dob,age,email,id])
    
}

module.exports = {getStudents,getStudentsById};