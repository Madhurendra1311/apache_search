const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    bloodGroup: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true, 
    },
    city: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    imageLink: {
        type: String, 
        required: true       
    },
    createdBy: {
        type: String
    }
});

module.exports = mongoose.model("Student", studentSchema);