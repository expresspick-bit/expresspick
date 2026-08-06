export default function SearchBar() {
  return (
    <input
      type="text"
      placeholder="Search for products..."
      style={{
        width: "100%",
        padding: "12px",
        borderRadius: "10px",
        border: "1px solid #ccc",
        marginBottom: "20px",
        fontSize: "16px",
      }}
    />
  );
}