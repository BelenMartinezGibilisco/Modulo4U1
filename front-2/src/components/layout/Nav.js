import React from 'react';
import { Link } from "react-router-dom";

const Nav = (props) => {
    return (
        <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/nosotros">Nosotros</Link></li>
          <li><Link to="/novedades">Novedades</Link></li>
          <li><Link to="/contacto">Contacto</Link></li>
          <li><Link to="/galeria">Galeria</Link></li>
          <li><Link to="/servicios">Servicios</Link></li>
        </ul>
      </nav>
    )
}

export default Nav;
