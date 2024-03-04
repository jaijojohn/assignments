const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const jwt = require("jsonwebtoken");
const {JWT_SECRET} = require("../config");

// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic
    username = req.body.username;
    password = req.body.password;
    User.create({
        username: username,
        password : password
    })
    .then(function(){
        res.json({
            msg:"user created successfully"
        })
    });
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    username = req.body.username;
    password = req.body.password;

    const user = await User.findOne({
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

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
     const username =  req.username;
     console.log(username);
    const allcourses = await Course.find({});
    res.json({
        courses : allcourses
    });
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    //console.log(req.username);
  //  res.json({
  //      username: req.username
  //  });
    // Implement course purchase logic
    const courseId = req.params.courseId;
    const username = req.username;

    await User.updateOne({
        username: username
    }, {
        "$push": {
            purchasedCourses: courseId
        }
    })
    res.json({
        message: "Purchase complete!"
    })
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const user = await User.findOne({
        username: req.username
    });

    console.log(user.purchasedCourses);
    const courses = await Course.find({
        _id: {
            "$in": user.purchasedCourses
        }
    });

    res.json({
        courses: courses
    })
});

module.exports = router