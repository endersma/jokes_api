const mongoose = require("mongoose");

const dbName = "jokes-api";

mongoose
    .connect("mongodb://localhost/" + dbName, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("Successfully connected to database!"))
    .catch((err) => console.log("Hmmmmmmmm"));
