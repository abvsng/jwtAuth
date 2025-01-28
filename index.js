const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
require("dotenv").config();

const { signUp, userExistChk } = require("./Routes/signUp");

app.use(cors(), express.json());

app.post("/signup", userExistChk, signUp);
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
