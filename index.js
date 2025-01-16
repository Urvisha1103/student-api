const express = require("express");
const app = express();
const port = 3000;

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

app.get("/", (req, res) => res.json(students));
app.listen(port, () =>
  console.log(`Server Started at http://loclhost:${port}!`)
);
