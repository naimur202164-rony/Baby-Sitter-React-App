const express = require("express");
const app = express();
const connectDatabase=require('./config/dataBase');

// Database Connection
connectDatabase();

// middleware//
app.use(express.json());    

// Router imports
const baby=require('./routes/babyRoutes');
const classes=require('./routes/classRoute');



app.use("/api/v1/",baby);
app.use("/api/v1/",classes);

module.exports = app;
