import React, { useState } from "react";
import { Box, TextField } from "@mui/material";
import axios from "axios";

const OtpInput = ({ length = 6, email }) => {
  const [otp, setOtp] = useState(new Array(length).fill(""));

  // Handle input change
  const handleChange = (e, index) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) { // Only allow numbers
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value && index < length - 1) {
        document.getElementById(`otp-${index + 1}`).focus();
      }
    }
  };

  // Handle backspace
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      document.getElementById(`otp-${index - 1}`).focus();
    }
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const otpValue = otp.join("");
    axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/user/login`, {email: email, otp: otpValue }, {withCredentials: true}).then((res) => {
      location.href = "/";
    })
  };
  // Render the OTP fields
  return (
    <form onSubmit={handleSubmit} className="">
        <h1 className="text-xl font-semibold mt-12 text-center text-green-500">OTP Sent to your mobile</h1>
      <div className="flex  flex-col items-center justify-start mt-4 ">
        <Box display="flex" gap={1} width={"20rem"} >
          {otp.map((digit, index) => (
            <TextField
              key={index}
              id={`otp-${index}`}
              value={digit}
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              inputProps={{
                maxLength: 1,
                style: { textAlign: "center" },
              }}
              variant="outlined"
            />
          ))}
        </Box>

        <div className='mt-8 text-center'>
          <button className='text-white bg-amber-500 w-[10rem] py-3 text-xl hover:bg-amber-600 rounded-lg' type="submit">Continue</button>
        </div>
      </div>
    </form>
  );
};

export default OtpInput;
