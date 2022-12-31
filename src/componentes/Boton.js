import React from 'react';

function Boton({ texto, esBotonDeClic, manejarClic }) {//sintaxis de desestructuración
  return (
    <button
      className={ esBotonDeClic ? 'boton-clic' : 'boton-reiniciar' }
      onClick={ manejarClic }>
      {texto}
    </button>
  );
}

export default Boton;