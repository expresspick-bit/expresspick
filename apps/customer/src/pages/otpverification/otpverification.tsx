import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Input from "../components/Input";
import Button from "../components/Button";

export default function OtpVerification() {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");

  const handleVerify = () => {
    // This will later verify the OTP with Supabase/backend
    navigate("/payment-success");
  };

  return (
    <>
      <Header userName="ExpressPick" />

      <div
        style={{
          maxWidth: "420px",
          margin: "40px auto",
          padding: "20px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "15px",
          }}
        >
          OTP Verification
        </h2>

        <p
          style={{
            textAlign: "center",
            color: "#666",
            marginBottom: "25px",
            lineHeight: 1.6,
          }}
        >
          Enter the 6-digit OTP sent to your phone after payment.
        </p>

        <Input
          placeholder="Enter 6-digit OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
        />

        <div style={{ marginTop: "20px" }}>
          <Button
            fullWidth
            onClick={handleVerify}
          >
            Verify OTP
          </Button>
        </div>

        <div
          style={{
            textAlign: "center",
            marginTop: "20px",
          }}
        >
          <button
            style={{
              border: "none",
              background: "transparent",
              color: "#1565C0",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Resend OTP
          </button>
        </div>
      </div>
    </>
  );
}

