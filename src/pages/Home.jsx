import { Link } from "react-router-dom";
import "./Home.css";

export const Home = () => {
  return (
    <div className="home">

      <header className="home-hero">
        <h1 className="brand-title">Finesse Watches</h1>
        <p className="brand-slogan">Relojes de lujo, al alcance de tu mano.</p>
        <Link to="/productos" className="btn-primary">
          Ver catálogo
        </Link>
      </header>

      <section className="home-cards">
        <div className="card">
          <h3>🚚 Envíos a todo el país</h3>
          <p>Recibí tu pedido estés donde estés, con envíos rápidos y seguros.</p>
        </div>
        <div className="card">
          <h3>🔒 Compra segura</h3>
          <p>Pagos protegidos con los mejores sistemas de seguridad online.</p>
        </div>
        <div className="card">
          <h3>💳 Pagá en cuotas</h3>
          <p>Financiación flexible para que disfrutes tu reloj sin preocupaciones.</p>
        </div>
      </section>
    </div>
  );
};
