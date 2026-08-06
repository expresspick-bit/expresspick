import MainLayout from "../../layouts/MainLayout";
import SearchBar from "../../components/SearchBar";
import CategoryCard from "../../components/CategoryCard";
import ProductCard from "../../components/ProductCard";

export default function Home() {
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

      <ProductCard name="Golden Morn" price={2500} />
      <ProductCard name="Peak Milk" price={1800} />
      <ProductCard name="Indomie Noodles" price={450} />
    </MainLayout>
  );
}
