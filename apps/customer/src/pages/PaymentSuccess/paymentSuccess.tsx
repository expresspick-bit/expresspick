
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import Button from "../../components/Button";

export default function PaymentSuccess() {
  const navigate = useNavigate();

  return (
    <>
      <Header userName="Customer" />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "80vh",
          padding: "20px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            width: "120px",
            height: "120px",
            borderRadius: "50%",
            background: "#22C55E",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "60px",
            color: "#fff",
            marginBottom: "25px",
          }}
        >
          ✓
        </div>

        <h1
          style={{
            color: "#22C55E",
            marginBottom: "10px",
          }}
        >
          Payment Successful
        </h1>

        <p
          style={{
            color: "#555",
            maxWidth: "400px",
            lineHeight: 1.6,
          }}
        >
          Your payment has been received successfully.
          Your order has been sent to the supermarket for preparation.
        </p>

        <div
          style={{
            background: "#F5F5F5",
            padding: "20px",
            borderRadius: "15px",
            width: "100%",
            maxWidth: "400px",
            marginTop: "25px",
            marginBottom: "25px",
          }}
        >
          <p>
            <strong>Order Number</strong>
          </p>

          <h2
            style={{
              color: "#1565C0",
            }}
          >
            #EXP123456
          </h2>

          <p>Status: Pending</p>
        </div>

        <Button
          fullWidth
          onClick={() => navigate("/orders")}
        >
          Track My Order
        </Button>

        <div style={{ height: "15px" }} />

        <Button
          fullWidth
          onClick={() => navigate("/")}
        >
          Continue Shopping
        </Button>
      </div>
    </>
  );
}
