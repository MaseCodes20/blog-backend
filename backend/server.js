const express = require("express");
require("dotenv").config();
const path = require("path");
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
app.use("/", express.static(path.join(__dirname, "/public")));
app.use("/", require("./routes/root"));

app.use("/api/v1/auth", require("./routes/authRoutes"));
app.use("/api/v1/users", require("./routes/userRoutes"));
app.use("/api/v1/posts", require("./routes/postRoutes"));

app.all("*", (req, res) => {
  res.status(404);
  if (req.accepts("html")) {
    res.sendFile(path.join(__dirname, "views", "404.html"));
  } else if (req.accepts("json")) {
    res.json({ message: "404 Not Fount" });
  } else {
    res.type("txt").send("404 Not Found");
  }
});

// ERROR HANDLER MIDDLEWARE (Last middleware to use)
app.use(errorHandler);

app.listen(port, () => console.log(`server is running on port ${port}`));
