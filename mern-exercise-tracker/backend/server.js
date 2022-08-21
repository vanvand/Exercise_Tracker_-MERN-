const express = require("express");
const cors = require("cors");
// connect to our MongoDB Atlas Database
const mongoose = require('mongoose');

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI; // where database is stored
mongoose.connect(uri, {});
const connection = mongoose.connection; 
connection.once("open", () => {
    console.log("MongoDB database connection established successfull")
})

// ############
// config to load different routes/url path
const exercisesRouter = require("./routes/exercises");
const usersRouter = require("./routes/users");

app.use("/exercises", exercisesRouter)
app.use("/users", usersRouter)


// ############
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
});