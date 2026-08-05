import { Routes, Route } from "react-router-dom";

import Home from "../pages/home/Home";
import Categories from "../pages/home/Categories";
import Search from "../pages/home/Search";

import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import ForgotPassword from "../pages/auth/ForgotPassword";

import Cart from "../pages/cart/Cart";

import Checkout from "../pages/checkout/Checkout";
import Payment from "../pages/checkout/Payment";

import Orders from "../pages/orders/Orders";
import OrderDetails from "../pages/orders/OrderDetails";
import TrackOrder from "../pages/orders/TrackOrder";

import ProductDetails from "../pages/products/ProductDetails";

import Profile from "../pages/profile/Profile";
import EditProfile from "../pages/profile/EditProfile";
import Settings from "../pages/profile/Settings";

function NotFound() {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
    </div>
  );
}

export default function AppRoutes() {
  return (
    <Routes>
      {/* Home */}
      <Route path="/" element={<Home />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/search" element={<Search />} />

      {/* Authentication */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />

      {/* Products */}
      <Route path="/products/:id" element={<ProductDetails />} />

      {/* Cart */}
      <Route path="/cart" element={<Cart />} />

      {/* Checkout */}
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/payment" element={<Payment />} />

      {/* Orders */}
      <Route path="/orders" element={<Orders />} />
      <Route path="/orders/:id" element={<OrderDetails />} />
      <Route path="/track-order/:id" element={<TrackOrder />} />

      {/* Profile */}
      <Route path="/profile" element={<Profile />} />
      <Route path="/profile/edit" element={<EditProfile />} />
      <Route path="/settings" element={<Settings />} />

      {/* 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
