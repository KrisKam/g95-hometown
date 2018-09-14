
module.exports = {

  development: {
    client: "pg",
    connection: "postgresql://localhost/g95-students"
  },

  production: {
    client: "pg",
    connection: process.env.DATABASE_URL
  }

};
