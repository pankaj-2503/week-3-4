const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();

// Admin Routes
app.post('/signup', (req, res) => {
    // Implement admin signup logic
    Admin.create({
        username:req.body.username,
        password:req.body.password
    })
    res.json({
        message:"Admins created successfully"
    })
    
});

app.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
    res.json({msg:"course created"});

});

app.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
    Courses.find().then((courses)=>res.json(courses));
});

module.exports = router;