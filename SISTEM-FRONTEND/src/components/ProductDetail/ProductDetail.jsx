import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // ID'ye göre hangi endpoint olduğunu belirle
        let apiUrl = "";
        const numericId = parseInt(id);

        if (numericId < 100) {
          apiUrl = `https://localhost:7191/api/ComputerProducts/${id}`;
        } else {
          apiUrl = `https://localhost:7191/api/SecurityProduct/${id}`;
        }

        const res = await axios.get(apiUrl);
        setProduct(res.data);
      } catch (error) {
        console.error("Ürün alınırken hata oluştu:", error);
      }
    };

    fetchData();
  }, [id]);

  if (!product) return <p>Yükleniyor...</p>;

  return (
    <div className="product-detail">
      <h1>{product.name}</h1>
      <img
        src={product.imageUrl}
        alt={product.name}
        style={{ width: "300px" }}
      />
      <p>{product.description}</p>
      <p>Fiyat: {product.price} TL</p>
    </div>
  );
}
export default ProductDetail;
