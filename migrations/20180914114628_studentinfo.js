
exports.up = function(knex, Promise) {
  return knex.schema.createTable("studentinfo", (student) => {
    student.increments("id");
    student.string("first");
    student.string("last");
    student.string("lat");
    student.string("long");
    student.string("favAnimal");
    student.string("prevOccupation");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("studentinfo");
};