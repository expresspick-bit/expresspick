type CategoryCardProps = {
  name: string;
};

export default function CategoryCard({ name }: CategoryCardProps) {
  return (
    <div
      style={{
        padding: "15px",
        backgroundColor: "#f5f5f5",
        borderRadius: "10px",
        textAlign: "center",
        minWidth: "120px",
      }}
    >
      <strong>{name}</strong>
    </div>
  );
}
