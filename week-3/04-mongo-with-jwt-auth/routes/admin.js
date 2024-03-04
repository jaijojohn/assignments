const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin, Course } = require("../db");
const jwt = require("jsonwebtoken");
const {JWT_SECRET} = require("../config");

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    username = req.body.username;
    password = req.body.password;

    await Admin.create({
        username:username,
        password: password  
    })
        
    res.json({
            msg: "admin created successfully."
        })

});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    username = req.body.username;
    password = req.body.password;

    const user = await Admin.findOne({
        username, 
        password
    })
    if(user){
    const token = jwt.sign({
        username
    },JWT_SECRET);
    res.json({
        token : token
    })
    }
    else
    {
        res.status(403).json({
            msg:"incorrect email id and password"
        })
    }
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const imageLink = req.body.imageLink;
    const price = req.body.price;

    const newCourse = await Course.create(
        {
            title:title,
            description:description,
            imageLink:imageLink,
            price:price
        }
    )
    res.json({
        message : "new course created successfully",courseId:newCourse._id
    })
});

router.get('/courses', adminMiddleware, async (req, res) => {
    const response = await Course.find({});
    res.json({
        cousrse: response
    })
    
});
module.exports = router;