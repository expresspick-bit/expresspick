type ProductCardProps = {
  name: string;
  price: number;
};

export default function ProductCard({
  name,
  price,
}: ProductCardProps) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "15px",
        marginBottom: "15px",
      }}
    >
      <h3>{name}</h3>

      <p>₦{price.toLocaleString()}</p>

      <button>Add to Cart</button>
    </div>
  );
}