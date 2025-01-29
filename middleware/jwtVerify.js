const jwt = require("jsonwebtoken");
function jwtVerify(req, res, next) {
  const token = req.headers["authorization"]?.split(" ")[1]; // Get token from Authorization header

  if (!token) return res.status(403).send("Access denied");

  jwt.verify(token, process.env.JWT_KEY, (err, decoded) => {
    if (err) return res.status(401).send("Invalid token");

    req.user = decoded; // Add user data to request object
    next();
  });
}
module.exports = {
  jwtVerify,
};
