const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
require("dotenv").config();

const { signUp, userNameExistChk } = require("./Routes/signUp");
const { userExistChk, signIn } = require("./Routes/signIn");

app.use(cors(), express.json());

app.post("/signup", userNameExistChk, signUp);

app.get("/signin", userExistChk, signIn);
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
