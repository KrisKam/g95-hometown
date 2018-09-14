const connection = require("./knexfile")[process.env.NODE_ENV || "development"];
const knex = require("knex")(connection);

const allStudents = () => {
  return knex.select()
    .from("studentinfo");
};

const getStudent = (id) => {
  return knex.select()
    .from("studentinfo")
      .where("id", id);
};

const createStudent = (newData) => {
  return knex("studentinfo")
    .insert(newData)
    .returning('*');
};

const updateStudent = (id) => {
  return knex.select()
    .from("studentinfo")
      .where("id", id)
        .delete();
};

const deleting = (id) => {
  return knex.select()
    .from("studentinfo")
      .where("id", id)
        .delete();
};

module.exports = {

  allStudents,
  getStudent,
  createStudent,
  deleting

}
