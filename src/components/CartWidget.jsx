import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import "./CartWidget.css";

export const CartWidget = () => {
  const { totalItems } = useContext(CartContext);

  return (
    <div className="cart-widget">
      <Link to="/carrito">
        🛒
        {totalItems() > 0 && (
          <span className="cart-count">{totalItems()}</span>
        )}
      </Link>
    </div>
  );
};
