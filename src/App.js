import './App.css';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png'
import Boton from './componentes/Boton';
import Contador from './componentes/Contador'
import { useState } from 'react'; //Importando el hook useState

function App() {

  const [numClics, setNumClics] = useState(0); //Usando el hook

  const sumarClic = () => {
    setNumClics(numClics + 1);
  }

  const reiniciarContador = () => {
    setNumClics(0);
  }

  return (
    <div className='App'>
      <div className='freecodecamp-logo-contenedor'>
        <img 
          className='freecodecamp-logo'
          src={freeCodeCampLogo}
          alt='Logo de freecodecamp'
        />
      </div>
      <div className='contenedor-principal'>
        <Contador 
          numClics = {numClics}
        />
        <Boton 
          texto = 'Clic'
          esBotonDeClic = { true }
          manejarClic = {sumarClic}
        />
        <Boton 
          texto = 'Reiniciar'
          esBotonDeClic = { false }
          manejarClic = {reiniciarContador}
        />
      </div>
    </div>
  );
}

export default App;
