import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { db } from "../firebase/config";
import { collection, addDoc, Timestamp } from "firebase/firestore";

export const CheckoutForm = () => {
  const { cart, totalPrice, clearCart } = useContext(CartContext);

  const [formData, setFormData] = useState({ nombre: "", email: "", telefono: "" });
  const [orderId, setOrderId] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.nombre || !formData.email || !formData.telefono) {
      alert("Todos los campos son obligatorios");
      return;
    }

    const order = {
      comprador: formData,
      items: cart,
      total: totalPrice(),
      fecha: Timestamp.fromDate(new Date())
    };

    const docRef = await addDoc(collection(db, "orders"), order);
    setOrderId(docRef.id);
    clearCart();
  };

  if (orderId) {
    return (
      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <h2>¡Gracias por tu compra!</h2>
        <p>Tu número de orden es:</p>
        <strong>{orderId}</strong>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: "400px", margin: "2rem auto", display: "flex", flexDirection: "column", gap: "1rem" }}>
      <h2>Finalizar compra</h2>

      <input
        type="text"
        name="nombre"
        placeholder="Nombre"
        value={formData.nombre}
        onChange={handleChange}
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />

      <input
        type="tel"
        name="telefono"
        placeholder="Teléfono"
        value={formData.telefono}
        onChange={handleChange}
      />

      <button type="submit">Confirmar compra</button>
    </form>
  );
};
