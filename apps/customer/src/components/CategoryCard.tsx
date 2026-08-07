
type CategoryCardProps = {
  name: string;
    image: string;
      onClick?: () => void;
      };

      export default function CategoryCard({
        name,
          image,
            onClick,
            }: CategoryCardProps) {
              return (
                  <div
                        onClick={onClick}
                              style={{
                                      width: "120px",
                                              backgroundColor: "#ffffff",
                                                      borderRadius: "15px",
                                                              padding: "12px",
                                                                      textAlign: "center",
                                                                              cursor: "pointer",
                                                                                      boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                                                                                              transition: "0.2s",
                                                                                                      border: "1px solid #f1f1f1",
                                                                                                            }}
                                                                                                                >
                                                                                                                      <img
                                                                                                                              src={image}
                                                                                                                                      alt={name}
                                                                                                                                              style={{
                                                                                                                                                        width: "70px",
                                                                                                                                                                  height: "70px",
                                                                                                                                                                            objectFit: "cover",
                                                                                                                                                                                      borderRadius: "50%",
                                                                                                                                                                                                marginBottom: "10px",
                                                                                                                                                                                                        }}
                                                                                                                                                                                                              />

                                                                                                                                                                                                                    <h4
                                                                                                                                                                                                                            style={{
                                                                                                                                                                                                                                      margin: 0,
                                                                                                                                                                                                                                                fontSize: "15px",
                                                                                                                                                                                                                                                          color: "#333",
                                                                                                                                                                                                                                                                    fontWeight: 600,
                                                                                                                                                                                                                                                                            }}
                                                                                                                                                                                                                                                                                  >
                                                                                                                                                                                                                                                                                          {name}
                                                                                                                                                                                                                                                                                                </h4>
                                                                                                                                                                                                                                                                                                    </div>
                                                                                                                                                                                                                                                                                                      );
                                                                                                                                                                                                                                                                                                      }



















