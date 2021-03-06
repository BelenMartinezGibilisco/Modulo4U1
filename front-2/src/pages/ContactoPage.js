import React from "react";

const ContactoPage = (props) => {
    return (
        <main className="holder contacto">
      <div>
        <h2>Contacto Rápido</h2>
        <form action="" method="" class="formulario">
          <p>
            <label for="nombre">Nombre</label>
            <input type="text" name="" />
          </p>
          <p>
            <label for="email">Email</label>
            <input type="text" name="" />
          </p>
          <p>
            <label for="telefono">Telefono</label>
            <input type="text" name="" />
          </p>
          <p>
            <label for="mensaje">Mensaje</label>
            <textarea name="" id="" cols="30" rows="10"></textarea>
          </p>
          <p>
            <input type="submit" value="Enviar" />
          </p>
        </form>
      </div>
      <div class="datos">
        <h2>Otras vías de comunicación</h2>
        <p>
          También puede contactarse con nosotros usando los siguientes medios
        </p>
        <ul>
          <li>Teléfono: 43242388</li>
          <li>Email: contacto@transportesx.com.ar</li>
          <li>Facebook:</li>
          <li>Twitter:</li>
          <li>Skype:</li>
        </ul>
      </div>
    </main>

        )
    }
    
    export default ContactoPage;