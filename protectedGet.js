function protectedGet(req, res) {
  res.send("welcome to protected route");
}
module.exports = {
  protectedGet,
};
