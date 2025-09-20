import "./ItemListContainer.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProductos } from "../services/products";

export const ItemListContainer = ({ categoria }) => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getProductos()
            .then(data => setProductos(data))
            .finally(() => setLoading(false))
    }, [])

    const productosFiltrados = categoria
        ? productos.filter((p) => p.categoria === categoria)
        : productos;

    if (loading) {
        return (
            <div className="loading">
                <h2 style={{ textAlign: "center" }}>Cargando productos...</h2>
            </div>
        )
    }


    return (
        <div className="product-list">
            {productosFiltrados.map((prod) => (
                <div key={prod.id} className="product-card">
                    <img src={prod.img} alt={prod.nombre} />
                    <h3>{prod.nombre}</h3>
                    <p>{prod.descripcion}</p>
                    <p className="price">${prod.precio}</p>
                    <Link to={`/productos/${prod.id}`}>Detalles</Link>
                </div>
            ))}
        </div>
    );
};
