
module.exports = {

  development: {
    client: "pg",
    connection: "postgresql://localhost/galvanize-students"
  },

  production: {
    client: "pg",
    connection: process.env.DATABASE_URL
  }

};
