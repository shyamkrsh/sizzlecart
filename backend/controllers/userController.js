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
        if (!email) {
            throw new Error("Email is missing")
        }
        if (!otp) {
            throw new Error("Password is missing")
        }
        // Find user by email
        const user = await User.findOne({ email });
        if (!user) {
            throw new Error("User not registered")
        }

        // Compare passwords
        const isPasswordValid = await bcrypt.compare(otp, user.otp);
        if (!isPasswordValid) {
            throw new Error("Icorrect Password");
        }

        // Generate JWT token
        const tokenData = {
            _id: user._id,
            email: user.email,
        };
        const token = jwt.sign(tokenData, "mysecretStringyoucantchanged", {
            expiresIn: "7d", // 7 days
        });

        const tokenOptions = {
            httpOnly: true,
            secure: true,
            sameSite: "None",
        };

        res.cookie("token", token, tokenOptions).status(200).json({
            message: "Login successful",
            data: user,
            success: true,
            error: false,
        });

    } catch (err) {
        res.json({
            message: err.message || err,
            error: true,
            success: false,
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