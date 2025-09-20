import { useEffect, useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import "./ItemListContainer.css";
import "./ItemDetailContainer.css";
import { ItemCount } from "./ItemCount";
import { CartContext } from "../context/CartContext"; 

export const ItemDetailContainer = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [added, setAdded] = useState(false);
  const [error, setError] = useState("");

  const { addItem } = useContext(CartContext);

  useEffect(() => {
    const docRef = doc(db, "productos", id);

    getDoc(docRef)
      .then((res) => {
        if (res.exists()) {
          setProducto({ id: res.id, ...res.data() });
        } else {
          setProducto(null);
        }
      })
      .finally(() => setLoading(false));
  }, [id]);

  const handleAddToCart = (cantidad) => {
    const ok = addItem(producto, cantidad);

    if (!ok) {
      setError("⚠️ No hay stock suficiente");
    } else {
      setError("");
      setAdded(true);
    }
  };

  if (loading) {
    return <h2 style={{ textAlign: "center" }}>Cargando producto...</h2>;
  }

  if (!producto) {
    return <h2 style={{ textAlign: "center" }}>Producto no encontrado</h2>;
  }

  return (
    <div className="product-detail">
      <div className="product-card">
        <img src={producto.img} alt={producto.nombre} />
        <h2>{producto.nombre}</h2>
        <p>{producto.descripcion}</p>
        <p className="price">${producto.precio}</p>

        {!added ? (
          <>
            <ItemCount stock={producto.stock} onAdd={handleAddToCart} />
            {error && <p style={{ color: "red", fontWeight: "bold" }}>{error}</p>}
          </>
        ) : (
          <Link to="/carrito" className="add-to-cart">
            Ir al carrito
          </Link>
        )}

        <Link to="/productos">Volver</Link>
      </div>
    </div>
  );
};
