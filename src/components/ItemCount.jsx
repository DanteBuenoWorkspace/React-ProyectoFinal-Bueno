import { useState } from 'react';
import "./ItemCount.css";

export const ItemCount = ({ stock, onAdd }) => {
    const [count, setCount] = useState(1);

    const sumarCantidad = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    };

    const restarCantidad = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    return (
        <div className="itemcount-container">
            <button
                className="itemcount-button"
                onClick={restarCantidad}
                disabled={count === 1}
            >
                -
            </button>

            <span>{count}</span>

            <button
                className="itemcount-button"
                onClick={sumarCantidad}
                disabled={count === stock}
            >
                +
            </button>

            <button
                className="itemcount-add"
                onClick={() => onAdd(count)}
                disabled={stock === 0}
            >
                Agregar al carrito
            </button>
        </div>
    );
};
