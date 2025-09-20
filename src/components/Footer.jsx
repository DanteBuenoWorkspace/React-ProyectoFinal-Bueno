import React from 'react'
import './Footer.css'

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2 className="footer-logo">Finesse</h2>
        <p className="footer-text">📞 2317 571691</p>
        <p className="footer-copy">© {new Date().getFullYear()} Finesse. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}
