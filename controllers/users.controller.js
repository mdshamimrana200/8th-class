const userSchema = require("../model/userSchema");

const getAllUser = async (req, res) => {
  res.send(await userSchema.find());
};
const getOneUser = async (req, res) => {
  var user = await userSchema.findOne({ name: req.params.name });
  if (user) {
    res.send(user);
  } else res.send("not found user");
};
const addUser = async (req, res) => {
  const { name, email } = req.body;
  const user = new userSchema({
    name,
    email,
  });
  await user.save();
  res.send(user);
};
const updateUser = async (req, res) => {
  var user = await userSchema.findOne({ name: req.params.name });
  if (user) {
    const { name, email } = req.body;
    user.name = name;
    user.email = email;
  } else res.send("name not found");
  await user.save();
  res.send(user);
};
const deleteUser = async (req, res) => {
  var user = await userSchema.findOne({ name: req.params.name });
  if (user) {
    await userSchema.deleteOne({ name: req.params.name });
    res.send("deleted user" + user);
  } else res.send("user not availabe");
};

module.exports = { getAllUser, addUser, updateUser, deleteUser, getOneUser };
