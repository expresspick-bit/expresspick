import { useEffect, useState } from "react";

import MainLayout from "../../layouts/MainLayout";
import SearchBar from "../../components/SearchBar";
import CategoryCard from "../../components/CategoryCard";
import ProductCard from "../../components/ProductCard";

import type { Product } from "../../types/product";
import { getProducts } from "../../services/products";

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function loadProducts() {
      const data = await getProducts();
      setProducts(data);
    }

    loadProducts();
  }, []);

  return (
    <MainLayout>
      <h2>Welcome to ExpressPick</h2>

      <SearchBar />

      <h3>Categories</h3>

      <div
        style={{
          display: "flex",
          gap: "10px",
          overflowX: "auto",
          marginBottom: "20px",
        }}
      >
        <CategoryCard name="Groceries" />
        <CategoryCard name="Beverages" />
        <CategoryCard name="Snacks" />
        <CategoryCard name="Household" />
      </div>

      <h3>Featured Products</h3>

      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </MainLayout>
  );
}