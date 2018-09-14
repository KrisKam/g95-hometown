const connection = require("./knexfile")[process.env.NODE_ENV || "development"];
const knex = require("knex")(connection);

const allStudents = () => {
  return knex.select()
    .from("students");
};

const getStudent = () => {
  return knex.select()
    .from("students")
      .where("id", id);
};

const createStudent = (newData) => {
  return knex("students")
    .insert(newData, ["id"]);
};

const updateStudent = (id) => {
  return knex.select()
    .from("students")
      .where("id", id)
        .delete();
};

const deleting = (id) => {
  return knex.select()
    .from("students")
      .where("id", id)
        .delete();
};

module.exports = {

  allStudents,
  getStudent,
  createStudent,
  deleting

}
