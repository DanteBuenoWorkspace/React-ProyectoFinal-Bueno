import { Link } from "react-router-dom"

export const NotFound = () => {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>404</h1>
      <p>La página que buscás no existe</p>
      <Link to="/">Volver al inicio</Link>
    </div>
  )
}
