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

// Routes
app.use("/api/v1/auth", require("./routes/authRoutes"));
app.use("/api/v1/posts", require("./routes/postRoutes"));

// ERROR HANDLER MIDDLEWARE (Last middleware to use)
app.use(errorHandler);

app.listen(port, () => console.log(`server is running on port ${port}`));
