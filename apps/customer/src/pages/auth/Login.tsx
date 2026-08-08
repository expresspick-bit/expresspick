import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Input from "../../components/Input";
import Button from "../../components/Button";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
            marginBottom: "30px",
          }}
        >
          Customer Login
        </h2>

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

        <div
          style={{
            textAlign: "right",
            marginBottom: "20px",
          }}
        >
          <Link
            to="/forgot-password"
            style={{
              color: "#1565C0",
              textDecoration: "none",
            }}
          >
            Forgot Password?
          </Link>
        </div>

        <Button fullWidth>
          Login
        </Button>

        <div
          style={{
            textAlign: "center",
            marginTop: "20px",
          }}
        >
          Don't have an account?{" "}
          <Link
            to="/register"
            style={{
              color: "#1565C0",
              fontWeight: "bold",
            }}
          >
            Register
          </Link>
        </div>
      </div>
    </>
  );
}
