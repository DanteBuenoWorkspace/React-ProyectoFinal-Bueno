import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (producto, cantidad) => {
    const itemAdd = cart.find(item => item.id === producto.id);

    if (itemAdd) {
      if (itemAdd.cantidad + cantidad > producto.stock) {
        
        return false;
      }

      const carritoActualizado = cart.map(item =>
        item.id === producto.id
          ? { ...item, cantidad: item.cantidad + cantidad }
          : item
      );
      setCart(carritoActualizado);
      return true;

    } else {
      if (cantidad > producto.stock) {
        return false;
      }

      setCart([...cart, { ...producto, cantidad }]);
      return true;
    }
  };

  const removeItem = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const totalItems = () => {
    return cart.reduce((acc, item) => acc + item.cantidad, 0);
  };

  const totalPrice = () => {
    return cart.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
  };

  return (
    <CartContext.Provider
      value={{ cart, addItem, removeItem, clearCart, totalItems, totalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
};
