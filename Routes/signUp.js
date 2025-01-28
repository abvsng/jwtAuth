const { User } = require("../DB/mongoose");
const bcrypt = require("bcryptjs");
async function signUp(req, res) {
  const { userId, pwd } = req.body;

  const hPwd = bcrypt.hashSync(pwd);
  const newUser = new User({ userId: userId, pwd: hPwd });
  await newUser.save();
  res.send("user added");
}

async function userNameExistChk(req, res, next) {
  const { userId } = req.body;
  const userExist = await User.findOne({ userId: userId });

  if (userExist) {
    return res.status(401).send("user already exist");
  }
  next();
}
module.exports = {
  signUp,
  userNameExistChk,
};
