"use client";
import React, { useRef, useState } from "react";

const OtpComponent: React.FC = () => {
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);
  const [otp, setOtp] = useState<string[]>(Array(4).fill(""));
  const [btnPlaceholder, setBtnPlaceholder] = useState("Verify Account");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { value } = e.target;
    if (isNaN(Number(value))) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value !== "" && index < 7) {
      const nextInput = document.getElementById(`otp-input-${index + 1}`);
      if (nextInput) {
        (nextInput as HTMLInputElement).focus();
      }
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && index > 0 && otp[index] === "") {
      const previousInput = document.getElementById(`otp-input-${index - 1}`);
      if (previousInput) {
        (previousInput as HTMLInputElement).focus();
      }
    }
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const otpValue = otp.join("");
    console.log("OTP submitted:", otpValue);
    if (otpValue.length === 4) {
      if (otpValue === "1234") {
        setBtnPlaceholder("Verifying...");
        setTimeout(() => {
          setBtnPlaceholder("Verified");
        }, 2000);
      } else {
        setBtnPlaceholder("Verification failed");
        setTimeout(() => {
          setBtnPlaceholder("Verify Account");
        }, 2000);
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center bg-[#F9F7F7]">
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-bold text-black mb-4">
          Mobile Phone Verification
        </h1>
        <p className="text-2xl text-[#BFBFBF] max-w-lg mb-8">
          Enter the 4-digit verification code that was sent to your phone
          number.
        </p>
        <div className="flex flex-row items-center justify-center gap-4 mb-8">
          {otp.map((data, index) => (
            <input
              type="text"
              className="p-2 text-center text-3xl text-black w-20 h-20 bg-[#DBE2EF] rounded-xl"
              placeholder={`${index + 1}`}
              maxLength={1}
              ref={(el) => {
                inputsRef.current[index] = el;
              }}
              id={`otp-input-${index}`}
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              key={index}
              value={data}
            />
          ))}
        </div>
        <button
          className="bg-[#112D4E] text-white p-4 w-full max-w-sm rounded-lg hover:bg-[#2C598A] transition-all duration-300"
          onClick={handleSubmit}
          style={{
            background:
              btnPlaceholder === "Verified"
                ? "#23CF9B"
                : btnPlaceholder === "Verification failed"
                ? "#FF5C5C"
                : "#112D4E",
          }}
        >
          {btnPlaceholder}
        </button>
      </div>
      <div className="p-4 text-center text-2xl text-[#BFBFBF] max-w-xl">
        Didn’t receive code? <span className="text-[#112D4E]">Resend</span>
      </div>
    </div>
  );
};

export default OtpComponent;
