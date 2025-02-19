const jwt = require("jsonwebtoken");

async function authToken(req, res, next) {
    try {
        const token = req?.cookies?.token ;
        if (!token) {
            return res.json({
                message: "User not login",
                error: true,
                sucsess: false,
            })
        }
        jwt.verify(token, 'mysecretStringyoucantchanged', function (err, decoded) {
            if(err){
                console.log("Error auth", err);
            }
            req.userId= decoded?._id;
            
            next();
        });

    } catch (err) {
        res.status(400).json({
            message: err.message || err,
            data: [],
            error: true,
            success: false,
        })
    }
}

module.exports = authToken;
