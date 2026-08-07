
type ProductCardProps = {
  id?: string;
    name: string;
      image: string;
        price: number;
          stock?: number;
            onAddToCart?: () => void;
              onClick?: () => void;
              };

              export default function ProductCard({
                name,
                  image,
                    price,
                      stock = 0,
                        onAddToCart,
                          onClick,
                          }: ProductCardProps) {
                            return (
                                <div
                                      style={{
                                              background: "#fff",
                                                      borderRadius: "16px",
                                                              overflow: "hidden",
                                                                      boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
                                                                              border: "1px solid #eee",
                                                                                    }}
                                                                                        >
                                                                                              <div
                                                                                                      onClick={onClick}
                                                                                                              style={{
                                                                                                                        cursor: "pointer",
                                                                                                                                }}
                                                                                                                                      >
                                                                                                                                              <img
                                                                                                                                                        src={image}
                                                                                                                                                                  alt={name}
                                                                                                                                                                            style={{
                                                                                                                                                                                        width: "100%",
                                                                                                                                                                                                    height: "180px",
                                                                                                                                                                                                                objectFit: "cover",
                                                                                                                                                                                                                          }}
                                                                                                                                                                                                                                  />
                                                                                                                                                                                                                                        </div>

                                                                                                                                                                                                                                              <div
                                                                                                                                                                                                                                                      style={{
                                                                                                                                                                                                                                                                padding: "14px",
                                                                                                                                                                                                                                                                        }}
                                                                                                                                                                                                                                                                              >
                                                                                                                                                                                                                                                                                      <h3
                                                                                                                                                                                                                                                                                                style={{
                                                                                                                                                                                                                                                                                                            margin: "0 0 8px",
                                                                                                                                                                                                                                                                                                                        fontSize: "18px",
                                                                                                                                                                                                                                                                                                                                    color: "#222",
                                                                                                                                                                                                                                                                                                                                              }}
                                                                                                                                                                                                                                                                                                                                                      >
                                                                                                                                                                                                                                                                                                                                                                {name}
                                                                                                                                                                                                                                                                                                                                                                        </h3>

                                                                                                                                                                                                                                                                                                                                                                                <p
                                                                                                                                                                                                                                                                                                                                                                                          style={{
                                                                                                                                                                                                                                                                                                                                                                                                      margin: "0 0 10px",
                                                                                                                                                                                                                                                                                                                                                                                                                  color: "#1565C0",
                                                                                                                                                                                                                                                                                                                                                                                                                              fontSize: "18px",
                                                                                                                                                                                                                                                                                                                                                                                                                                          fontWeight: "bold",
                                                                                                                                                                                                                                                                                                                                                                                                                                                    }}
                                                                                                                                                                                                                                                                                                                                                                                                                                                            >
                                                                                                                                                                                                                                                                                                                                                                                                                                                                      ₦{price.toLocaleString()}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                              </p>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      <p
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                style={{
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            margin: "0 0 14px",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        fontSize: "14px",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    color: stock > 0 ? "green" : "red",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              }}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      >
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                {stock > 0 ? `${stock} in stock` : "Out of stock"}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        </p>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                <button
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          onClick={onAddToCart}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    disabled={stock <= 0}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              style={{
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          width: "100%",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      padding: "12px",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  backgroundColor: stock > 0 ? "#1565C0" : "#BDBDBD",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              color: "#fff",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          border: "none",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      borderRadius: "10px",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  fontSize: "16px",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              fontWeight: "bold",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          cursor: stock > 0 ? "pointer" : "not-allowed",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    }}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            >
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      🛒 Add to Cart
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              </button>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          );
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          }


















































































































 















































































 



























































































 
