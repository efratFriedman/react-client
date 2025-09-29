import { useEffect, useState } from "react";
import { fetchProducts } from "./service/products";

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProducts()
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading products...</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error.message || error}</p>;

  return (
    <div style={styles.container}>
      {products.map((p) => (
        <div
          key={p.id}
          className="product-card"
          style={styles.card}
          onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-10px) scale(1.03)"}
          onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0) scale(1)"}
        >
          {p.image && <img src={p.image} alt={p.name} style={styles.image} />}
          <h3 style={styles.title}>{p.name}</h3>
          <p style={styles.description}>{p.description}</p>
          <p style={styles.price}>${p.price}</p>
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "25px",
    padding: "20px",
    justifyItems: "center",
  },
  card: {
    width: "100%",
    maxWidth: "300px",
    border: "1px solid #e0e0e0",
    borderRadius: "15px",
    padding: "20px",
    backgroundColor: "#fff",
    textAlign: "center",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    cursor: "pointer",
  },
  image: {
    width: "100%",
    height: "180px",
    objectFit: "cover",
    borderRadius: "10px",
    marginBottom: "15px",
  },
  title: {
    fontSize: "1.2rem",
    fontWeight: "600",
    marginBottom: "10px",
    color: "#333",
  },
  description: {
    fontSize: "0.95rem",
    color: "#555",
    marginBottom: "10px",
  },
  price: {
    fontSize: "1rem",
    fontWeight: "bold",
    color: "#1a73e8",
  },
};

export default ProductsList;
