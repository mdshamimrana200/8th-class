const express = require("express");
const routers = require("./routers/users.router");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./model/dbConfig");
//home router
app.get("/", (req, res) => {
  res.send("HOME");
});
//rouers
app.use("/users", routers);
//404 not fund
app.use((req, res) => {
  res.send("note found");
});

module.exports = app;
