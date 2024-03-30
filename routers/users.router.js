const {getAllUser, addUser, updateUser, deleteUser, getOneUser} = require("../controllers/users.controller");

const routers = require("express").Router()

routers.get("/", getAllUser);
routers.get("/:name", getOneUser);
routers.post("/add", addUser);
routers.put("/update/:name", updateUser);
routers.delete("/delete/:name", deleteUser); 

module.exports = routers