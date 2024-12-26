const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "satyashyam717@gmail.com",
    pass: "gbcvojoxxylyjqwp",
  },
});

const sendOtp = async (to, subject, text) => {
  try {
    const mailOptions = {
      from: "satyashyam717@gmail.com",
      to,
      subject,
      text,
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
