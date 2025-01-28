const { User } = require("../DB/mongoose");
const bcrypt = require("bcryptjs");
async function signIn(req, res) {
  const { userId, pwd } = req.query;

  const userData = await User.findOne({ userId: userId });
  const isPwdValid = bcrypt.compareSync(pwd, userData.pwd);
  if (!isPwdValid) return res.send("incorrect password");
  res.send("signInSuccessfull");
}

async function userExistChk(req, res, next) {
  const { userId } = req.query;
  const userExist = await User.findOne({ userId: userId });

  if (!userExist) {
    return res.status(401).send("user doesn't exist");
  }
  next();
}
module.exports = {
  userExistChk,
  signIn,
};
