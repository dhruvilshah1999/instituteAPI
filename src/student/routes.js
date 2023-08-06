const {Router} = require("express");
const controller = require("./controller")
const router = Router();

router.get("/",controller.getStudents);
router.get("/:id",controller.getStudentsById);
router.put("/update/:id",controller.updateStudentByid);
router.delete("/delete/:id",controller.deleteStudentByid);

module.exports = router;