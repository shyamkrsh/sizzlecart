const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "satyashyam717@gmail.com",
    pass: "gbcvojoxxylyjqwp",
  },
});

const sendOtp = async (to, otp) => {
  try {
    const mailOptions = {
      from: "satyashyam717@gmail.com",
      to,
      subject: "OTP for verification",
      html: `<p>Your OTP is <h3>${otp}</h3> you can use this to verify your account</p>`,
    };
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
      } else {
        return info.response;
      }
    });
  }
  catch (error) {
    console.log(error);
  } 
}

module.exports = sendOtp;
