import React from "react";

const HomePage = (props) => {
    return (
        <main className="holder">
      <div>
        <img src="img/home/img01.jpg" alt="avión" />
      </div>
      <div className="columnas">
        <section className="bienvenidos">
          <h2>Bienvenidos</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum totam
            nisi quam error ea dolorem vero deleniti, nam dolor dolore eius unde
            quae minus ipsam sunt incidunt illo ut. Asperiores!
          </p>
        </section>
        <section className="testimonios">
          <h2>Testimonios</h2>
          <div className="testimonio">
            <span class="cita">Simplemente excelente</span>
            <span classs="autor">Juan Gómez - zapatos.com</span>
          </div>
        </section>
      </div>
    </main>
        )
    }
    
    export default HomePage;
  