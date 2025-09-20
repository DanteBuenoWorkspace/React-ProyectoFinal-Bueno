import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { CartItem } from "../components/CartItem";
import { Link } from "react-router-dom";
import "./Carrito.css";

export const Carrito = () => {
  const { cart, removeItem, clearCart, totalPrice } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div className="carrito-vacio">
        <h2>Tu carrito está vacío</h2>
        <Link to="/productos">Ir a comprar</Link>
      </div>
    );
  }

  return (
    <div className="carrito">
      <h2>Carrito</h2>

      {cart.map((item) => (
        <CartItem key={item.id} item={item} removeItem={removeItem} />
      ))}

      <h3>Total: ${totalPrice()}</h3>
      <button onClick={clearCart}>Vaciar carrito</button>
      <Link to="/checkout">Finalizar compra</Link>
    </div>
  );
};
