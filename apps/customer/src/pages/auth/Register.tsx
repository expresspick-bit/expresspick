import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Input from "../../components/Input";
import Button from "../../components/Button";

export default function Register() {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <>
      <Header userName="Welcome" />

      <div
        style={{
          maxWidth: "450px",
          margin: "30px auto",
          padding: "20px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "25px",
          }}
        >
          Create ExpressPick Account
        </h2>

        <Input
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />

        <Input
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <Input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <div style={{ marginTop: "20px" }}>
          <Button fullWidth>
            Create Account
          </Button>
        </div>

        <div
          style={{
            textAlign: "center",
            marginTop: "20px",
          }}
        >
          Already have an account?{" "}
          <Link
            to="/login"
            style={{
              color: "#1565C0",
              fontWeight: "bold",
              textDecoration: "none",
            }}
          >
            Login
          </Link>
        </div>
      </div>
    </>
  );
}
