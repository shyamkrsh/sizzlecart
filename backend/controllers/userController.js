const otpGenerator = require('otp-generator');
const sendMail = require('../middlewares/sendOtp');
const User = require("./../models/User")
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports.verifyOtp = async (req, res) => {
    try {
        const { email } = req.body;
        const otp = otpGenerator.generate(6, { upperCaseAlphabets: false, specialChars: false, lowerCaseAlphabets: false });
        sendMail(email, otp).then(async (response) => {
            const user = await User.findOne({ email: email });
            const salt = bcrypt.genSaltSync(10);
            const hashedOtp = bcrypt.hashSync(otp, salt);

            if (!user) {
                const newUser = new User({ email: email, otp: hashedOtp });
                await newUser.save();
            }

            const updatedUser = await User.findOneAndUpdate({ email: email }, { otp: hashedOtp }, { new: true });
            await updatedUser.save();

            res.status(200).json({
                message: "OTP sent successfully",
                data: [],
                success: true,
                error: false,
            });
        }).catch((err) => {
            res.status(500).json({
                message: "Internal server error",
                data: [],
                success: false,
                error: true,
            });
        })
    } catch (err) {
        res.status(500).json({
            message: "Internal server error",
            data: [],
            success: false,
            error: true,
        });

    }
}

module.exports.login = async (req, res) => {
    try {
        const { email, otp } = req.body;
        console.log(email, otp);

        // Find user by email
        const user = await User.findOne({ email: email });

        // Check if user exists
        if (!user) {
            return res.json({
                message: "User not found",
                data: [],
                success: false,
                error: true,
            });
        }

        // Compare OTP
        const isOtpValid = await bcrypt.compare(otp, user.otp);
        if (!isOtpValid) {
            return res.json({
                message: "Invalid OTP",
                data: [],
                success: false,
                error: true,
            });
        }

        // Create token data
        const tokenData = {
            _id: user._id,
            email: user.email,
        };
        const token = jwt.sign(tokenData, "mysecretstring", { expiresIn: "7d" });

        // Set cookie options
        const tokenOptions = {
            httpOnly: true,
            secure: true, 
            maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days in milliseconds
        };


     // Set cookie and send response
        res.cookie("token", token, tokenOptions);
        res.status(200).json({
            message: "Login successful",
            data: user,
            success: true,
            error: false,
        });

    } catch (err) {
        console.error(err); // Log the error for debugging
        res.status(500).json({
            message: "Internal server error",
            data: [],
            success: false,
            error: true,
        });
    }
};

module.exports.logout = async (req, res) => {
    try {
        
        res.clearCookie('token', {
            httpOnly: true,
            secure: true,      
        });
        res.status(200).json({
            message: "Logout successful",
            data: [],
            success: true,
            error: false,
        });
    } catch (err) {
        res.status(500).json({
            message: "Internal server error",
            data: [],
            success: false,
            error: true,
        });
    }
}