import React from "react";

const ServiciosPage = (props) => {
    return (
        <main className="holder">
      <h2>Servicios</h2>
      <div className="servicio">
        <img src="img/servicios/ferroviario.jpg" alt="Tren" />
        <div className="info">
          <h4>Transporte Ferroviario</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio in
            nemo odit est dolorum error, sed necessitatibus ratione iusto quod
            esse omnis expedita hic, voluptate doloribus, perferendis tempore ad
            asperiores?
          </p>
        </div>
      </div>
      <div className="servicio">
        <img src="img/servicios/aereo.jpg" alt="Avión" />
        <div className="info">
          <h4>Transporte Aéreo</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio in
            nemo odit est dolorum error, sed necessitatibus ratione iusto quod
            esse omnis expedita hic, voluptate doloribus, perferendis tempore ad
            asperiores?
          </p>
        </div>
      </div>
      <div className="servicio">
        <img src="img/servicios/maritimo.jpg" alt="Barco" />
        <div className="info">
          <h4>Transporte Marítimo</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio in
            nemo odit est dolorum error, sed necessitatibus ratione iusto quod
            esse omnis expedita hic, voluptate doloribus, perferendis tempore ad
            asperiores?
          </p>
        </div>
      </div>
      <div className="servicio">
        <img src="img/servicios/terrestre.jpg" alt="Camión" />
        <div className="info">
          <h4>Transporte Terrestre</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio in
            nemo odit est dolorum error, sed necessitatibus ratione iusto quod
            esse omnis expedita hic, voluptate doloribus, perferendis tempore ad
            asperiores?
          </p>
        </div>
      </div>
    </main>
        )
    }
    
    export default ServiciosPage;