const connection = require("./knexfile")[process.env.NODE_ENV || "development"];
const knex = require("knex")(connection);

const allStudents = () => {
  return knex.select()
    .from("studentinfo")
      .orderBy("id", "ascending");
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

const updateStudent = (id, updatedData) => {
  return knex("studentinfo")
      .where("id", id)
        .update(updatedData);
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
  updateStudent,
  deleting

}
