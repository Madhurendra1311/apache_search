const express = require("express");
const router = express.Router();
const multer = require('multer')
const path = require('path')
const {body, validationResult} = require('express-validator')


const Student = require("../models/Student")

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, path.join(__dirname, "../uploads"))
    },
    filename: function(req, file, cb){
        cb(null, new Date().toISOString() + file.originalname)
    }
})

const fileFilter = (req, file, cb) => {
    if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'){
        cb(null, true)
    }else{
        cb(null, false)
    }
};

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter,
})



router.post("/create",upload.single('imageLink'), (req, res, next) => {
    console.log("hello")
    console.log(req.body)
    console.log(req.file.path)
    
    const name = req.body.name
    const city = req.body.city
    const email = req.body.email
    const bloodGroup = req.body.bloodGroup
    const imageLink = req.file.path
    const gender = req.body.gender
    const createdBy = req.body.createdBy

    const newStudent = new Student({ name, city, email, bloodGroup, imageLink, gender, createdBy });

    newStudent.save()
    .then(result => res.status(200).json({message: "File Uploaded Successfully"}))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.get("/students", async(req, res) => {
    const page = parseInt(req.query.page)
    const limit = parseInt(req.query.limit)
    const userId = req.query.userId
    const startIndex = (page - 1) * limit

    const results = {}

    let total = await Student.countDocuments({ $or : [{ createdBy : null }, { createdBy : userId }] }).exec()    
  
    results.page = page
    results.per_page = limit
    results.total = total
    results.total_page = Math.ceil(total/limit)

    try {
      results.data = await Student.find({ $or : [{ createdBy : null }, { createdBy : userId }] }).limit(limit).skip(startIndex).exec();
      res.json(results);
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
})

router.delete("/delete", async(req, res) => {
    await Student.findByIdAndDelete(req.headers.id)
    .then(() => res.json("Student Deleted Successfully"))
    .catch((err) => res.status(400).json("Error: " + err));
})

router.get("/user", async(req, res) =>{
    await Student.findById(req.headers.id)
    .then((students) =>{
        console.log(students)
        res.json(students)
    })
    .catch((err) => res.status(400).json("Error: " + err));
})

router.put("/edit",upload.single('imageLink'), async(req, res) =>{
    await Student.findById(req.body.id)
    .then((student) => {
        student.name = req.body.name;
        student.city = req.body.city;
        student.email = req.body.email;
        student.bloodGroup = req.body.bloodGroup;
        student.imageLink = req.file.path;
        student.gender = req.body.gender;

    student.save()
        .then(() => res.json("Student updated Successfully"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
})

module.exports = router