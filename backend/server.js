const express = require("express");
require("dotenv").config();
const cors = require("cors");

const port = process.env.PORT || 8000;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(port, () => console.log(`server is running on port ${port}`));
