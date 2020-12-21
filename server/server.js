const express = require('express')
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require('cors')

dotenv.config();
const students = require('./students')
const studentRoute = require("./routes/Students")
const studentModel = require("./models/Student");


const app = express()
app.use(cors())
app.use(express.json());

mongoose.connect(
    process.env.ATLAS_URI,
    { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true },
    (err) => {
        if (err) throw err;

        if (studentModel.collection.countDocuments(function (err, count) {
            if (!err && count === 0) {
                studentModel.insertMany(students).then(() => {
                    console.log("Data inserted")
                }).catch((error) => {
                    console.log(error)
                });
            }
        }));

    })

app.use('/uploads', express.static("uploads"))
app.use("/api", studentRoute)
const authRoute = require("./routes/auth");

app.use("/user", authRoute);

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`The server is up and running ${port}`);
});