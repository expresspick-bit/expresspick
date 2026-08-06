import { Link } from "react-router-dom";

export default function BottomNav() {
  return (
    <nav
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        height: "60px",
        backgroundColor: "#1565C0",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        color: "#ffffff",
      }}
    >
      <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>
        Home
      </Link>

      <Link to="/categories" style={{ color: "#fff", textDecoration: "none" }}>
        Categories
      </Link>

      <Link to="/cart" style={{ color: "#fff", textDecoration: "none" }}>
        Cart
      </Link>

      <Link to="/orders" style={{ color: "#fff", textDecoration: "none" }}>
        Orders
      </Link>

      <Link to="/profile" style={{ color: "#fff", textDecoration: "none" }}>
        Profile
      </Link>
    </nav>
  );
}
