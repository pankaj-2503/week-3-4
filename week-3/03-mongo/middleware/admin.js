// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    Admin.create({
        username: req.body.username,
        password: req.body.password
    });
    next();

}

module.exports = adminMiddleware;