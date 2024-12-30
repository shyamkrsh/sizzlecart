const otpGenerator = require('otp-generator');
const sendMail = require('../middlewares/sendOtp');
const User = require("./../models/User")

module.exports.verifyOtp = async (req, res) => {
    const {email} = req.body;
    const otp = otpGenerator.generate(6, {upperCaseAlphabets: false, specialChars: false, lowerCaseAlphabets: false});
    sendMail(email, otp).then(async(response) => {
        const user = await User({email, otp});
        await user.save();
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
}

module.exports.login = async (req, res) => {
    const {email, otp} = req.body;
    const user = await User
}