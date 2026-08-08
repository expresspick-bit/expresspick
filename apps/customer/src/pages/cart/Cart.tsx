import { useState } from "react";
import Header from "../../components/Header";
import Button from "../../components/Button";
import BottomNavigation from "../../components/BottomNavigation";

export default function Cart() {
  const [cartItems] = useState([
    {
      id: 1,
      name: "Peak Milk",
      price: 1800,
      quantity: 2,
      image: "https://via.placeholder.com/100",
    },
    {
      id: 2,
      name: "Golden Morn",
      price: 2500,
      quantity: 1,
      image: "https://via.placeholder.com/100",
    },
  ]);

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const serviceFee = cartItems.length <= 2 ? 100 : 200;

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
        <h2>My Cart</h2>

        {cartItems.map((item) => (
          <div
            key={item.id}
            style={{
              display: "flex",
              marginBottom: "18px",
              background: "#fff",
              borderRadius: "12px",
              padding: "12px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            }}
          >
            <img
              src={item.image}
              alt={item.name}
              style={{
                width: "80px",
                height: "80px",
                borderRadius: "10px",
                objectFit: "cover",
              }}
            />

            <div
              style={{
                marginLeft: "15px",
                flex: 1,
              }}
            >
              <h3>{item.name}</h3>

              <p>₦{item.price.toLocaleString()}</p>

              <p>Quantity: {item.quantity}</p>
            </div>
          </div>
        ))}

        <div
          style={{
            background: "#fff",
            padding: "18px",
            borderRadius: "15px",
            marginTop: "20px",
          }}
        >
          <p>
            <strong>Subtotal:</strong> ₦{subtotal.toLocaleString()}
          </p>

          <p>
            <strong>Service Fee:</strong> ₦{serviceFee.toLocaleString()}
          </p>

          <hr />

          <h2
            style={{
              color: "#1565C0",
            }}
          >
            Total: ₦{total.toLocaleString()}
          </h2>

          <Button fullWidth>
            Proceed to Checkout
          </Button>
        </div>
      </div>

      <BottomNavigation />
    </>
  );
}
