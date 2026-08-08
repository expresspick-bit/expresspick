import React from "react";
import Header from "../components/Header";
import Button from "../components/Button";
import BottomNavigation from "../components/BottomNavigation";

export default function Profile() {
  return (
    <>
      <Header userName="Customer" />

      <div
        style={{
          padding: "20px",
          paddingBottom: "100px",
        }}
      >
        <div
          style={{
            textAlign: "center",
            marginBottom: "30px",
          }}
        >
          <img
            src="https://via.placeholder.com/120"
            alt="Profile"
            style={{
              width: "120px",
              height: "120px",
              borderRadius: "50%",
              objectFit: "cover",
              border: "4px solid #1565C0",
            }}
          />

          <h2 style={{ marginTop: "15px" }}>
            Customer Name
          </h2>

          <p style={{ color: "#666" }}>
            customer@email.com
          </p>
        </div>

        <div
          style={{
            background: "#fff",
            borderRadius: "15px",
            padding: "18px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            marginBottom: "20px",
          }}
        >
          <p><strong>📞 Phone:</strong> +234xxxxxxxxxx</p>

          <p><strong>📍 Pickup Store:</strong> Shoprite Ota</p>

          <p><strong>🎁 Loyalty Points:</strong> 0</p>
        </div>

        <Button fullWidth>
          Edit Profile
        </Button>

        <div style={{ height: "15px" }} />

        <Button fullWidth>
          Change Password
        </Button>

        <div style={{ height: "15px" }} />

        <Button fullWidth>
          Logout
        </Button>
      </div>

      <BottomNavigation />
    </>
  );
}
