const express = require("express");
const app = express();
require("dotenv").config();
const path = require("path");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { errorHandler } = require("./middlewares/errorMiddleware");
const connectDB = require("./config/db");
const { logger } = require("./middlewares/logger");
const corsOptions = require("./config/corsOptions");

const port = process.env.PORT || 8000;

app.use(logger);

// Connect to Mongoose Database
connectDB();

// Middlewares
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/", express.static(path.join(__dirname, "public")));
app.use("/", require("./routes/root"));

app.use("/api/v1/auth", require("./routes/authRoutes"));
app.use("/api/v1/users", require("./routes/userRoutes"));
app.use("/api/v1/posts", require("./routes/postRoutes"));

app.all("*", (req, res) => {
  res.status(404);
  if (req.accepts("html")) {
    res.sendFile(path.join(__dirname, "views", "404.html"));
  } else if (req.accepts("json")) {
    res.json({ message: "404 Not Found" });
  } else {
    res.type("txt").send("404 Not Found");
  }
});

// ERROR HANDLER MIDDLEWARE (Last middleware to use)
app.use(errorHandler);

app.listen(port, () => console.log(`server is running on port ${port}`));
