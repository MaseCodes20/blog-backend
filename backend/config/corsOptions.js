const allowedorigins = require("./allowedOrigins");

const corsOptions = {
  origin: (origin, callback) => {
    if (allowedorigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
  optionsSuccessStatus: 200,
};

module.exports = corsOptions;
