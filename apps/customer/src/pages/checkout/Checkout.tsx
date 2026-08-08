import { useState } from "react";
import Header from "../../components/Header";
import Button from "../../components/Button";
import Input from "../../components/Input";
import BottomNavigation from "../../components/BottomNavigation";

export default function Checkout() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [pickupTime, setPickupTime] = useState("");

  const subtotal = 6100;
  const serviceFee = 100;
  const total = subtotal + serviceFee;

  return (
    <>
      <Header userName="Customer" />

      <div
        style={{
          padding: "20px",
          paddingBottom: "100px",
        }}
      >
        <h2>Checkout</h2>

        <Input
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <Input
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <Input
          type="time"
          value={pickupTime}
          onChange={(e) => setPickupTime(e.target.value)}
        />

        <div
          style={{
            background: "#fff",
            padding: "18px",
            borderRadius: "12px",
            marginTop: "20px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
          }}
        >
          <h3>Order Summary</h3>

          <p>Subtotal: ₦{subtotal.toLocaleString()}</p>

          <p>Service Fee: ₦{serviceFee.toLocaleString()}</p>

          <hr />

          <h2 style={{ color: "#1565C0" }}>
            Total: ₦{total.toLocaleString()}
          </h2>
        </div>

        <div style={{ marginTop: "25px" }}>
          <h3>Payment Method</h3>

          <label style={{ display: "block", marginBottom: "10px" }}>
            <input type="radio" name="payment" defaultChecked /> Card
          </label>

          <label style={{ display: "block", marginBottom: "10px" }}>
            <input type="radio" name="payment" /> Bank Transfer
          </label>

          <label style={{ display: "block", marginBottom: "20px" }}>
            <input type="radio" name="payment" /> USSD
          </label>

          <Button fullWidth>
            Pay with Paystack
          </Button>
        </div>
      </div>

      <BottomNavigation />
    </>
  );
}
