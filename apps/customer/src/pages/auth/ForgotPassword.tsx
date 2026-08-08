import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Input from "../../components/Input";
import Button from "../../components/Button";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  return (
    <>
      <Header userName="Welcome" />

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
            marginBottom: "20px",
          }}
        >
          Forgot Password
        </h2>

        <p
          style={{
            textAlign: "center",
            color: "#666",
            marginBottom: "25px",
          }}
        >
          Enter your registered email address to receive a password reset link.
        </p>

        <Input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Button fullWidth>
          Send Reset Link
        </Button>

        <div
          style={{
            textAlign: "center",
            marginTop: "20px",
          }}
        >
          <Link
            to="/login"
            style={{
              color: "#1565C0",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Back to Login
          </Link>
        </div>
      </div>
    </>
  );
}
