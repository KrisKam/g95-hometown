const express = require("express");
const app = express();
const cors = require("cors");
const queries = require("./queries");
const host = process.env.POST || 3000;

app.use(cors());

app.get("/", (request, response, next) => {
  return response.send("hello everyone");
});



app.listen(host, () => (console.log(`Listening on PORT ${host}`)));