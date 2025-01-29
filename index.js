const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
require("dotenv").config();

const { signUp, userNameExistChk } = require("./Routes/signUp");
const { userExistChk, signIn } = require("./Routes/signIn");
const { protectedGet } = require("./protectedGet");
const { jwtVerify } = require("./middleware/jwtVerify");

app.use(cors(), express.json());

app.post("/signup", userNameExistChk, signUp); //signUp route

app.get("/signin", userExistChk, signIn); //signIn route

app.get("/", jwtVerify, protectedGet); //protected route

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
