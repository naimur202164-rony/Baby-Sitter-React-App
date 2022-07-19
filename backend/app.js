const express = require("express");
const app = express();

// middleware

app.use(express.json());    


// Router imports
const baby=require('./routes/babyRoutes');

app.use("/api/v1/",baby);


module.exports = app;
