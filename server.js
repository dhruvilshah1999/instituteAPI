const { json } = require('body-parser');
const express = require('express');
const studentRouter = require("./src/student/routes");

const app = express();
const port = 3000;

app.use(express.json());

app.use("/api/v1/students",studentRouter);
app.use("/api/v1/students/1",studentRouter);
app.use("/api/v1/students/update/1",studentRouter);
app.use("/api/v1/students/delete/1",studentRouter);
app.use("/api/v1/students/add",studentRouter);

app.listen(port, ()=> {
    console.log(`listning port ${port}`);
});
