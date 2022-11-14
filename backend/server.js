const express = require("express");
require("dotenv").config();
const cors = require("cors");
const { errorHandler } = require("./middlewares/errorMiddleware");
const connectDB = require("./config/db");

const port = process.env.PORT || 8000;

// Connect to Mongoose Database
connectDB();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(errorHandler);

// Routes

app.listen(port, () => console.log(`server is running on port ${port}`));
