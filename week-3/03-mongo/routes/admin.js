const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();

// Admin Routes
router.post('/signup', (req, res) => {
    // Implement admin signup logic
    username = req.body.username;
    password = req.body.password;

    Admin.create({
        username:username,
        password: password  
    }).then(function(){
        res.json({
            msg: "admin created successfully."
        })
    });

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
