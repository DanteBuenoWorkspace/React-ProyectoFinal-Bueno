import "./CartItem.css";

export const CartItem = ({ item, removeItem }) => {
  return (
    <div className="cart-item">
      <img src={item.img} alt={item.nombre} className="cart-item-img" />

      <div className="cart-item-info">
        <h3>{item.nombre}</h3>
        <p>Cantidad: {item.cantidad}</p>
        <p>Precio unitario: ${item.precio}</p>
        <p>Subtotal: ${item.precio * item.cantidad}</p>

        <button onClick={() => removeItem(item.id)}>Eliminar</button>
      </div>
    </div>
  );
};
