const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const queries = require("./queries");
const host = process.env.POST || 3000;

app.use(cors());
app.use(bodyParser.json());

app.get("/", (request, response, next) => {
  queries.allStudents()
    .then(result => response.json({students: result}))
});

app.get("/:id", (request, response, next) => {
  queries.getStudent(request.params.id)
    .then(result => response.json({student: result}))
});

app.post("/", (request, response, next) => {
  queries.createStudent(request.body)
    .then(newStudentData => response.json({newStudent: newStudentData}));
});

app.put("/:id", (request, response, next) => {
  queries.updateStudent(request.params.id)
    .then(result => response.json({updatedStudent: result}))

})

app.delete("/:id", (request, response, next) => {
  queries.deleting(request.params.id)
    .then(result => response.json({result}))
});

app.listen(host, () => (console.log(`Listening on PORT ${host}`)));