const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());

var students = [
  {
    enrollment_no: "23SOECE13001",
    name: "Urvisha",
    branch: "CE",
    sem: 6,
    div: "A",
    roll_no: 62,
  },
];
//To fetch all students
app.get("/", (req, res) => res.json(students));
//to add new students
app.post("/", (req, res) => {
    const { enrollment_no,name,branch,sem,div,roll_no } = req.body;
    students = [...students,{ enrollment_no,name,branch,sem,div,roll_no }];
    res.json(students);
});

//to update a student

app.put("/:enrollment_no", (req, res) => {
    const enrollment_no  = req.params.enrollment_no;
    const { name,branch,sem,div,roll_no } = req.body;
    students = students.map((student) => student.enrollment_no == enrollment_no ? { enrollment_no,name,branch,sem,div,roll_no } : student );
    res.json(students);
});
app.listen(port, () =>
  console.log(`Server Started at http://loclhost:${port}!`)
);
