const express = require("express");
const cors = require("cors");
const app = express();

// Middleware
app.use(cors());

const connectDatabase = require("./config/dataBase");

// Database Connection
connectDatabase();

// middleware//
app.use(express.json());

// Router imports
const baby = require("./routes/babyRoutes");
const classes = require("./routes/classRoute");
const blogs = require("./routes/blogRoute");

app.use("/api/v1/", baby);
app.use("/api/v1/", classes);
app.use("/api/v1", blogs);

module.exports = app;
