import React, { useState } from "react";
import { Box, TextField } from "@mui/material";

const OtpInput = ({ length = 6 }) => {
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

  // Render the OTP fields
  return (
    <Box display="flex" gap={1} width={"30rem"} >
      {otp.map((digit, index) => (
        <TextField
          key={index}
          id={`otp-${index}`}
          value={digit}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          inputProps={{
            maxLength: 1,
            style: { textAlign: "center"},
          }}
          variant="outlined"
        />
      ))}
    </Box>
  );
};

export default OtpInput;
