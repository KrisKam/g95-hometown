const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const queries = require("./queries");
const host = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.get("/", (request, response) => {
  queries.allStudents()
    .then(result => response.json({students: result}))
});

app.get("/:id", (request, response) => {
  queries.getStudent(request.params.id)
    .then(result => response.json({student: result}))
});

app.post("/", (request, response) => {
  queries.createStudent(request.body)
    .then(newStudentData => response.status(201).json({newStudent: newStudentData}));
});

app.put("/:id", (request, response) => {
  queries.updateStudent(request.params.id, request.body)
    .then(result => response.status(200).json({updatedStudent: result}))

})

app.delete("/:id", (request, response) => {
  queries.deleting(request.params.id)
    .then(result => response.status(204).json({result}))
});

app.listen(host, () => (console.log(`Listening on PORT ${host}`)));