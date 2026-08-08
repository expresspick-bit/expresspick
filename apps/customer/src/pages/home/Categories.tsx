
import Header from "../../components/Header";
import SearchBar from "../../components/SearchBar";
import CategoryCard from "../../components/CategoryCard";
import BottomNavigation from "../../components/BottomNavigation";

export default function Categories() {
  const categories = [
      { name: "Beverages", image: "https://via.placeholder.com/80" },
          { name: "Groceries", image: "https://via.placeholder.com/80" },
              { name: "Snacks", image: "https://via.placeholder.com/80" },
                  { name: "Frozen Foods", image: "https://via.placeholder.com/80" },
                      { name: "Fruits", image: "https://via.placeholder.com/80" },
                          { name: "Vegetables", image: "https://via.placeholder.com/80" },
                              { name: "Household", image: "https://via.placeholder.com/80" },
                                  { name: "Toiletries", image: "https://via.placeholder.com/80" },
                                    ];

                                      return (
                                          <>
                                                <Header userName="Customer" />

                                                      <div
                                                              style={{
                                                                        padding: "20px",
                                                                                  paddingBottom: "90px",
                                                                                          }}
                                                                                                >
                                                                                                        <h2>Shop by Category</h2>

                                                                                                                <SearchBar />

                                                                                                                        <div
                                                                                                                                  style={{
                                                                                                                                              display: "grid",
                                                                                                                                                          gridTemplateColumns: "repeat(auto-fill,minmax(140px,1fr))",
                                                                                                                                                                      gap: "20px",
                                                                                                                                                                                  marginTop: "20px",
                                                                                                                                                                                            }}
                                                                                                                                                                                                    >
                                                                                                                                                                                                              {categories.map((category) => (
                                                                                                                                                                                                                          <CategoryCard
                                                                                                                                                                                                                                        key={category.name}
                                                                                                                                                                                                                                                      name={category.name}
                                                                                                                                                                                                                                                                    image={category.image}
                                                                                                                                                                                                                                                                                />
                                                                                                                                                                                                                                                                                          ))}
                                                                                                                                                                                                                                                                                                  </div>
                                                                                                                                                                                                                                                                                                        </div>

                                                                                                                                                                                                                                                                                                              <BottomNavigation />
                                                                                                                                                                                                                                                                                                                  </>
                                                                                                                                                                                                                                                                                                                    );
                                                                                                                                                                                                                                                                                                                    }